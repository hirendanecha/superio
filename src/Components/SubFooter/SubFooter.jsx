import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const SubFooter = () => {
  return (
    <Box display="inline-block" width="full" padding="42px 0px 36px">
      <Container
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      >
        <Text
          fontSize="14px"
          fontWeight="400"
          color="#696969"
          textAlign="center"
          _first={{
            span: {
              fontWeight: 'bold',
            },
          }}
        >
          Companyname Website | Powered by <span>Jobflows</span> for monday.com
          Work OS
        </Text>
      </Container>
    </Box>
  );
};

export default SubFooter;
