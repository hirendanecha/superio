import React from "react";
import {
  Heading,
  Box,
  Text,
  Flex,
  Progress,
  Button,
  Image,
  useTheme,
} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import { JobOpeningsData } from "./JobOpeningsData";
import Card from "../Card/Card";
import emptyData from "../../assets/pngs/emptyData.png";
import { hexToRGB } from "../../utils";

const ShowingInfoText = styled(Text)`
  span {
    font-weight: bold;
  }
`;

const ProgressStyled = styled(Progress)`
  background: ${({ theme }) =>
    `${hexToRGB(theme.colors.brand.primaryColor, 0.07)} !important`};

  .css-i1aryf {
    background-color: ${({ theme }) => theme.colors.brand.primaryColor};
  }
`;

const JobOpenings = () => {
  const theme = useTheme();

  return (
    <>
      {JobOpeningsData.length > 0 && (
        <>
          <Heading
            as="h4"
            fontSize={{ base: "26px", md: "30px" }}
            fontWeight={500}
            color="#202124"
            marginBottom="50px"
            textAlign={{ base: "center", md: "left" }}
          >
            Job Openings
          </Heading>

          <SearchBar />

          <Box display="inline-block" width="full" marginBottom="60px">
            <ShowingInfoText
              fontSize={{ base: "14px", md: "15px" }}
              fontWeight="400"
              color="#696969"
              marginBottom="26px"
              display="flex"
              justifyContent="end"
              gap={1}
            >
              Showing <span>41-60 </span>of <span>944</span> jobs
            </ShowingInfoText>

            {JobOpeningsData?.map((card) => (
              <Card key={card?.id} card={card} />
            ))}

            <Flex flexFlow="column" align="center">
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#202124"
                marginBottom="13px"
              >
                Showing 36 of 497 Jobs
              </Text>
              <ProgressStyled
                value={80}
                marginBottom="17px"
                width="100%"
                maxWidth="300px"
                borderRadius="10px"
                theme={theme}
              />
              <Button
                colorScheme="teal"
                variant="link"
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                color="brand.primaryColor"
                paddingBottom="8px"
                position="relative"
                _after={{
                  position: "absolute",
                  content: "''",
                  width: "70%",
                  height: "2px",
                  background: "brand.primaryColor",
                  bottom: "0px",
                  left: 0,
                }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                Show More
              </Button>
            </Flex>
          </Box>
        </>
      )}

      {JobOpeningsData.length <= 0 && (
        <Box
          display="flex"
          flexFlow="column"
          width="100%"
          alignItems="center"
          marginBottom={{ base: "80px", md: "136px" }}
          textAlign="center"
        >
          <Image src={emptyData} alt="Empty Data" marginBottom="53px" />
          <Text
            fontSize={{ base: "18px", sm: "20px", md: "32" }}
            fontWeight="400"
            color="#000000"
            marginBottom="16px"
          >
            Sorry, no jobs found matching this criteria.
          </Text>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "24" }}
            fontWeight="400"
            color="#000000"
            marginBottom=""
          >
            Try removing filters or refine your search.
          </Text>
        </Box>
      )}
    </>
  );
};

export default JobOpenings;
