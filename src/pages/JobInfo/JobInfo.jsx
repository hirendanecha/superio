import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import JobInfoBanner from '../../Components/JobInfoBanner/JobInfoBanner';
import JobDescription from '../../Components/JobDescription/JobDescription';

const JobInfo = () => {
  return (
    <Box display="inline-block" width="full">
      <JobInfoBanner />
      <Container
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      >
        <JobDescription />
      </Container>
    </Box>
  );
};

export default JobInfo;
