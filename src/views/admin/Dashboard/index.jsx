import { Container, HStack, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import InfoCard from './InfoCard';
import {
  CourseIcon,
  ExerciseIcon,
  LectureIcon,
  StudentIcon,
  WalletIcon
} from 'components/Icons/Icons';
import LineChart from 'components/Charts/LineChart';
import {
  columnsOptions,
  donutOptions,
  lineChartData,
  lineChartOptions
} from 'components/Charts/chartOptions';
import ChartSection from 'components/Charts/ChartSection';
import OverviewTable from './OverviewTable';
import {
  useFetchReportCourse,
  useFetchReportEnrollment,
  useFetchReportOverview,
  useFetchReportSubmissions,
  useFetchReportUsers,
  useFetchReportViews
} from './hook/useQuery';
import LoadingScreen from 'components/LoadingScreen';
import ColumnChart from 'components/Charts/ColumnChart';
import { useFetchUsers } from '../User/hook/useQuery';
import PieChart from 'components/Charts/PieChart';

const Dashboard = () => {
  const [filter, setFilter] = React.useState({
    startAt: new Date().setFullYear(new Date().getFullYear() - 1),
    endAt: new Date().toISOString()
  });

  const { data, isLoading: loadingCourses } = useFetchReportCourse();
  const { data: reportViews, isLoading: loadingViews } = useFetchReportViews();
  const { data: reportEnrollments, isLoading: loadingEnrollment } =
    useFetchReportEnrollment(filter);
  const { data: reportUser, isLoading: loadingUsers } = useFetchReportUsers();
  const { data: reportSubmission, isLoading: loadingSubmission } = useFetchReportSubmissions();
  const { data: reportOverview, isLoading: loadingOverview } = useFetchReportOverview();

  const enrollmentSeries = React.useMemo(() => {
    return [
      {
        name: 'Lượt đăng ký khóa học',
        data: reportEnrollments ? reportEnrollments.map((el) => el.count) : []
      }
    ];
  }, [reportEnrollments]);

  const enrollmentOptions = React.useMemo(() => {
    return {
      ...lineChartOptions,
      xaxis: {
        ...lineChartOptions.xaxis,
        categories: reportEnrollments ? reportEnrollments.map((el) => el.time) : []
      }
    };
  }, [reportEnrollments]);

  const userSeries = React.useMemo(() => {
    return [
      reportUser?.notCompletedAnySubject || 0,
      reportUser?.notEnrollAnyCourse || 0,
      reportUser?.enrolledCourse || 0,
    ];
  }, [reportUser]);

  const userOptions = React.useMemo(() => {
    return {
      ...donutOptions,
      labels: ['Chưa hoàn thành bài học nào', 'Chưa đăng ký khóa học nào', 'Đã đăng ký khóa học']
    };
  }, []);

  const submissionSeries = React.useMemo(() => {
    return [
      reportSubmission?.countOfSubmission -
        reportSubmission?.failedSubmission -
        reportSubmission?.successSubmission || 0,
      reportSubmission?.failedSubmission || 0,
      reportSubmission?.successSubmission || 0
    ];
  }, [reportSubmission]);

  const submissionOptions = React.useMemo(() => {
    return {
      ...donutOptions,
      labels: ['Lần chạy bị gián đoạn', 'Chạy thất bại', 'Chạy thành công']
    };
  }, []);

  const courseSeries = React.useMemo(() => {
    return [
      {
        name: 'Lượt xem',
        data: reportViews ? reportViews.map((el) => el.totalViews) : []
      },
      {
        name: 'Bài giảng hoàn thành',
        data: data ? data.map((el) => el.completedSbj) : []
      },
      {
        name: 'Bài tập hoàn thành',
        data: data ? data.map((el) => el.completedExercise) : []
      }
    ];
  }, [data, reportViews]);

  const courseOptions = React.useMemo(() => {
    return {
      ...columnsOptions,
      xaxis: {
        ...columnsOptions.xaxis,
        categories: data ? data.map((el) => el.name) : []
      }
    };
  }, [data]);

  const mappingOverview = React.useMemo(() => {
    if(!reportOverview) return [];
    const result = Object.keys(reportOverview).map((key) => {
      const getLabel = (label) => {
        switch (label) {
          case 'course':
            return 'Khóa học';
          case 'exercise':
            return 'Bài tập';
          case 'user':
            return 'Học sinh';
          case 'subject':
            return 'Bài giảng';
          default:
            return 'Khóa học';
        }
      };

      const getIcon = (label) => {
        switch (label) {
          case 'course':
            return <CourseIcon h={'25px'} w={'25px'} color={'#fff'} />;
          case 'exercise':
            return <ExerciseIcon h={'25px'} w={'25px'} color={'#fff'} />
          case 'user':
            return <StudentIcon h={'25px'} w={'25px'} color={'#fff'} />
          case 'subject':
            return <LectureIcon h={'25px'} w={'25px'} color={'#fff'} />
          default:
            return <CourseIcon h={'25px'} w={'25px'} color={'#fff'} />;
        }
      };

      return {
        label: getLabel(key),
        icon: getIcon(key),
        allTime: reportOverview[key].allTime,
        thisMonth: reportOverview[key].thisMonth,
      }
    });

    return result;
  }, [reportOverview]);

  if (
    loadingCourses ||
    loadingViews ||
    loadingEnrollment ||
    loadingUsers ||
    loadingOverview ||
    loadingSubmission
  )
    return <LoadingScreen />;

  return (
    <Container maxW="8xl" pb={4}>
      <SimpleGrid gap="30px">
        <HStack gap={'30px'}>
          {mappingOverview.map((overview) => (
            <InfoCard
              key={overview.label}
              iconBlue={'blue.500'}
              iconBoxInside={'white'}
              textColor={'gray.700'}
              title={overview.label}
              value={overview.allTime}
              subValue={overview.thisMonth}
              icon={overview.icon}
            />
          ))}
        </HStack>

        <HStack gap="30px">
          <ChartSection
            title={'Lượt đăng ký khóa học'}
            children={<LineChart chartData={enrollmentSeries} options={enrollmentOptions} />}
          />
          <ChartSection
            title={'Thống kê khóa học'}
            children={<ColumnChart chartData={courseSeries} options={courseOptions} />}
          />
        </HStack>

        <HStack>
          <OverviewTable data={data ? data : []} />
        </HStack>

        <HStack>
          <ChartSection
            title={'Thống kê học viên'}
            children={<PieChart chartData={userSeries} options={userOptions} />}
          />
          <ChartSection
            title={'Thống kê kết quả làm bài tập'}
            children={<PieChart chartData={submissionSeries} options={submissionOptions} />}
          />
        </HStack>
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
