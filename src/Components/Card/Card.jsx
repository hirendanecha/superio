import React from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import { Bagsvg, Clocksvg } from '../../assets/svgs';
import { GrLocation } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LocationFlex = styled(Flex)`
  .location_icon {
    font-size: 17px;
  }

  .location_icon path {
    stroke: #696969;
  }
`;

const Card = ({ card }) => {
  const Navigate = useNavigate();

  const clickHandler = id => {
    Navigate(`/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      display="inline-block"
      width="100%"
      padding="20px 30px"
      border="1px solid #ECEDF2"
      borderRadius="8px"
      marginBottom="30px"
      cursor="pointer"
      role="group"
      transition={'all 0.3s ease-in-out'}
      _hover={{
        boxShadow: '0px 6px 15px rgba(64, 79, 104, 0.05)',
      }}
      onClick={() => clickHandler(card?.id)}
    >
      <Flex flexFlow="column">
        <Heading
          as="h4"
          fontSize={{ base: '16px', md: '18px' }}
          fontWeight="500"
          color="#202124"
          marginBottom="15px"
          transition={'all 0.3s ease-in-out'}
          _groupHover={{
            color: 'brand.primaryColor',
          }}
        >
          {card?.jobName}
        </Heading>
        <Flex marginBottom="26px" gap="20px" flexWrap="wrap">
          <Flex align="center" gap="10px">
            <Bagsvg />
            <Text fontSize="14px" fontWeight="400" color="#696969">
              {card?.department}
            </Text>
          </Flex>
          <LocationFlex align="center" gap="10px">
            <GrLocation className="location_icon" />
            <Text fontSize="14px" fontWeight="400" color="#696969">
              {card?.location}
            </Text>
          </LocationFlex>
          <Flex align="center" gap="10px">
            <Clocksvg />
            <Text fontSize="14px" fontWeight="400" color="#696969">
              {card?.jobType}
            </Text>
          </Flex>
        </Flex>

        {card?.description.length > 0 && (
          <Text noOfLines={2} fontSize="14px" fontWeight="400" color="#696969">
            We are looking for a smart Frontend Engineer who can participate in
            building our next generation interface. You will get a chance to get
            your hands dirty with our core product working directly with the
            Leadership and...
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default Card;
