import { Flex, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card';
import IconBox from 'components/Icons/IconBox';
import { WalletIcon } from 'components/Icons/Icons';
import React from 'react';

const InfoCard = ({ title, value, icon, textColor, iconBlue, iconBoxInside }) => {
  return (
    <Card minH="125px" backgroundColor="#fff">
      <Flex direction="column">
        <Flex flexDirection="row" align="center" justify="center" w="100%" mb="25px">
          <Stat me="auto">
            <StatLabel fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                {value}
              </StatNumber>
            </Flex>
          </Stat>
          <IconBox borderRadius="50%" as="box" h={'45px'} w={'45px'} bg={iconBlue}>
            {icon}
          </IconBox>
        </Flex>
        <Text color="gray.400" fontSize="sm">
          <Text as="span" color="green.400" fontWeight="bold">
            +3.48%{' '}
          </Text>
          Since last month
        </Text>
      </Flex>
    </Card>
  );
};

export default InfoCard;

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
  }
}
