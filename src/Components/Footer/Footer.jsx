import React from 'react';
import { Box, Container, Text, Grid, GridItem } from '@chakra-ui/react';
import EmailResume from '../EmailResume/EmailResume';

const Footer = () => {
  return (
    <Box
      display="inline-block"
      width="100%"
      borderTop="1px solid #ECEDF2"
      borderBottom="1px solid #ECEDF2"
    >
      <Container
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      >
        <EmailResume />

        <Grid
          templateColumns={{
            base: 'repeat(12, 1fr)',
          }}
          width="full"
        >
          <GridItem colStart={{ base: 2 }} colEnd={{ base: 12 }}>
            <Text
              fontSize="14px"
              color="#30172B"
              fontWeight="400"
              marginBottom={{ base: '60px', md: '112px' }}
              textAlign="center"
            >
              Company name does not discriminate on the basis of race, sex,
              color, religion, age, national origin, marital status, disability,
              veteran status, genetic information, sexual orientation, gender
              identity or any other reason prohibited by law in provision of
              employment opportunities and benefits.
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
