import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import CommonButton from '../CommonButton/CommonButton';

const EmailResume = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      minHeight="150px"
      padding={{ base: '32px', md: '0px 32px' }}
      background="brand.primaryColorRGBA"
      borderRadius="8px"
      marginTop="32px"
      marginBottom={{ base: '60px', md: '107px' }}
    >
      <Grid
        templateColumns={{
          base: 'repeat(12, 1fr)',
        }}
        width="full"
        alignItems="center"
        templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
      >
        <GridItem colStart={{ base: 1, md: 1 }} colEnd={{ base: 13, md: 10 }}>
          <Text
            fontSize={{ base: '14px', sm: '16px', md: '18px' }}
            color="#202124"
            fontWeight="400"
            marginBottom={{ base: '20px', md: '0px' }}
          >
            Can’t find the right role? Email your resume to
            companyname@jobs.jobflowsmail.com to be considered for new positions
            in the future.
          </Text>
        </GridItem>
        <GridItem colStart={{ base: 1, md: 11 }} colEnd={{ base: 13, md: 13 }}>
          <CommonButton text="Email My Resume" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default EmailResume;
