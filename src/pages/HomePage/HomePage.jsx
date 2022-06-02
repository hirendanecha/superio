import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import JobOpenings from '../../Components/JobOpenings/JobOpenings';

const HomePage = () => {
  return (
    <Box display="inline-block" width="full" marginTop="63px">
      <Container
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      >
        <JobOpenings />
      </Container>
    </Box>
  );
};

export default HomePage;
