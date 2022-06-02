import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Card from '../Card/Card';
import { JobOpeningsData } from '../JobOpenings/JobOpeningsData';

const KeyResponsibilitiesData = [
  'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
  'Work with BAs, product managers and tech teams to lead the Product Design',
  'Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.',
  'Accurately estimate design tickets during planning sessions.',
  'Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.',
  'Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.',
  'Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel',
  'Present your work to the wider business at Show & Tell sessions.',
];

const SkillExperienceData = [
  'You have at least 3 years’ experience working as a Product Designer.',
  'You have experience using Sketch and InVision or Framer X',
  'You have some previous experience working in an agile environment – Think two-week sprints.',
  'You are familiar using Jira and Confluence in your workflow',
];

const JobDescription = () => {
  return (
    <Box display="inline-block" width="100%">
      <Flex flexFlow="column">
        <Heading
          fontSize="18px"
          color="#202124"
          fontWeight="500"
          marginBottom="23px"
        >
          Job Description
        </Heading>
        <Text
          fontSize="15px"
          fontWeight="400"
          color="#696969"
          marginBottom="78px"
        >
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
        </Text>
      </Flex>

      <Heading
        fontSize="18px"
        color="#202124"
        fontWeight="500"
        marginBottom="23px"
      >
        Key Responsibilities
      </Heading>
      <UnorderedList marginBottom="38px">
        {KeyResponsibilitiesData?.map((item, index) => (
          <ListItem
            fontSize="15px"
            fontWeight="400"
            color="#696969"
            marginBottom="20px"
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>

      <Heading
        fontSize="18px"
        color="#202124"
        fontWeight="500"
        marginBottom="23px"
      >
        Skill & Experience
      </Heading>

      <UnorderedList marginBottom="48px">
        {SkillExperienceData?.map((item, index) => (
          <ListItem
            fontSize="15px"
            fontWeight="400"
            color="#696969"
            marginBottom="20px"
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>

      <Grid
        templateColumns={{
          base: 'repeat(12, 1fr)',
        }}
        alignItems="center"
        marginBottom="70px"
        templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
      >
        <GridItem colStart={{ base: 1, lg: 1 }} colEnd={{ base: 13, lg: 3 }}>
          <Heading
            fontSize="18px"
            color="#202124"
            fontWeight="500"
            textAlign={{ base: 'center', lg: 'left' }}
            marginBottom={{ base: '20px', lg: '0px' }}
          >
            Share this job
          </Heading>
        </GridItem>
        <GridItem colStart={{ base: 1, lg: 3 }} colEnd={{ base: 13, lg: 13 }}>
          <Flex
            gap={15}
            flexWrap="wrap"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Button
              background="#1967D2"
              minWidth="220px"
              borderRadius="8px"
              fontSize="15px"
              fontWeight="400"
              color="white"
              height="40px"
              _hover={{
                background: '#1967D2',
              }}
              leftIcon={<FaFacebookF color="white" />}
            >
              Facebook
            </Button>

            <Button
              background="#08A0E9"
              minWidth="220px"
              borderRadius="8px"
              fontSize="15px"
              fontWeight="400"
              color="white"
              height="40px"
              _hover={{
                background: '#08A0E9',
              }}
              leftIcon={<FaTwitter color="white" />}
            >
              Twitter
            </Button>

            <Button
              background="#0077B5"
              minWidth="220px"
              borderRadius="8px"
              fontSize="15px"
              fontWeight="400"
              color="white"
              height="40px"
              _hover={{
                background: '#0077B5',
              }}
              leftIcon={<FaLinkedinIn color="white" />}
            >
              LinkedIn
            </Button>
          </Flex>
        </GridItem>
      </Grid>

      <Flex flexFlow="column" marginBottom="70px">
        <Heading
          fontSize={{ base: '22px', md: '26px' }}
          color="#000000"
          fontWeight="500"
          marginBottom="40px"
        >
          Related Jobs
        </Heading>

        {JobOpeningsData?.slice(0, 3).map(card => (
          <Card key={card.id} card={card} />
        ))}
      </Flex>
    </Box>
  );
};

export default JobDescription;
