import { Container, HStack } from '@chakra-ui/react';
import React from 'react';
import InfoCard from './InfoCard';
import { StudentIcon } from 'assets/_icon';
import { WalletIcon } from 'components/Icons/Icons';

const Dashboard = () => {
  return (
    <Container maxW="9xl">
      <HStack gap={'30px'}>
        <InfoCard
          iconBlue={'blue.500'}
          iconBoxInside={'white'}
          textColor={'gray.700'}
          title={'Học sinh'}
          value={2000}
          icon={<WalletIcon h={'30px'} w={'30pxpx'} color={'#fff'} />}
        />
        <InfoCard
          iconBlue={'blue.500'}
          iconBoxInside={'white'}
          textColor={'gray.700'}
          title={'Học sinh'}
          value={2000}
          icon={<WalletIcon h={'30px'} w={'30pxpx'} color={'#fff'} />}
        />
        <InfoCard
          iconBlue={'blue.500'}
          iconBoxInside={'white'}
          textColor={'gray.700'}
          title={'Học sinh'}
          value={2000}
          icon={<WalletIcon h={'30px'} w={'30pxpx'} color={'#fff'} />}
        />
        <InfoCard
          iconBlue={'blue.500'}
          iconBoxInside={'white'}
          textColor={'gray.700'}
          title={'Học sinh'}
          value={2000}
          icon={<WalletIcon h={'30px'} w={'30pxpx'} color={'#fff'} />}
        />
        <InfoCard
          iconBlue={'blue.500'}
          iconBoxInside={'white'}
          textColor={'gray.700'}
          title={'Học sinh'}
          value={2000}
          icon={<WalletIcon h={'30px'} w={'30pxpx'} color={'#fff'} />}
        />
      </HStack>
    </Container>
  );
};

export default Dashboard;
