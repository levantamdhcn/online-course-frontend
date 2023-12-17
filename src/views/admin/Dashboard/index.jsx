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
  const { data: reportUser, isLoading: loadingUsers } = useFetchUsers();

  console.log('reportUser', reportUser);

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
      {
        name: 'Thống kê người dùng',
        data: [
          reportUser?.enrolledCourse || 0,
          reportUser?.notCompletedAnySubject || 0,
          reportUser?.notEnrollAnyCourse || 0
        ]
      }
    ];
  }, [reportUser]);

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

  if (loadingCourses || loadingViews || loadingEnrollment) return <LoadingScreen />;

  return (
    <Container maxW="8xl" pb={4}>
      <SimpleGrid gap="30px">
        <HStack gap={'30px'}>
          <InfoCard
            iconBlue={'blue.500'}
            iconBoxInside={'white'}
            textColor={'gray.700'}
            title={'Học sinh'}
            value={2000}
            subValue={30}
            icon={<StudentIcon h={'25px'} w={'25px'} color={'#fff'} />}
          />
          <InfoCard
            iconBlue={'blue.500'}
            iconBoxInside={'white'}
            textColor={'gray.700'}
            title={'Khóa học'}
            value={2000}
            subValue={30}
            icon={<CourseIcon h={'25px'} w={'25px'} color={'#fff'} />}
          />
          <InfoCard
            iconBlue={'blue.500'}
            iconBoxInside={'white'}
            textColor={'gray.700'}
            title={'Bài giảng'}
            value={2000}
            subValue={30}
            icon={<LectureIcon h={'25px'} w={'25px'} color={'#fff'} />}
          />
          <InfoCard
            iconBlue={'blue.500'}
            iconBoxInside={'white'}
            textColor={'gray.700'}
            title={'Bài tập'}
            value={2000}
            subValue={30}
            icon={<ExerciseIcon h={'25px'} w={'25px'} color={'#fff'} />}
          />
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
            title={'Title'}
            children={<PieChart chartData={userSeries} options={donutOptions} />}
          />
          {/* <ChartSection title={'Title'} children={<LineChart chartData={lineChartData} />} /> */}
        </HStack>
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
