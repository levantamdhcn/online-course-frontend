import { Container, HStack, SimpleGrid } from '@chakra-ui/react';
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
import { lineChartData } from 'components/Charts/chartOptions';
import ChartSection from 'components/Charts/ChartSection';

const Dashboard = () => {
  return (
    <Container maxW="9xl">
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
          <ChartSection title={'Title'} children={<LineChart chartData={lineChartData} />} />
          <ChartSection title={'Title'} children={<LineChart chartData={lineChartData} />} />
          <ChartSection title={'Title'} children={<LineChart chartData={lineChartData} />} />
        </HStack>
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
