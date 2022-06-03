import React, { useState } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  GridItem,
  FormControl,
  HStack,
  Tag,
  TagLabel,
  useTheme,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { GrLocation, GrFormClose } from "react-icons/gr";
import { Bagsvg, Clocksvg } from "../../assets/svgs";
import MenuComponent from "../Menu/Menu";
import CommonButton from "../CommonButton/CommonButton";
import styled from "styled-components";
import { hexToRGB } from "../../utils";

const TagStyled = styled(Tag)`
  path {
    stroke: ${({ theme }) => theme.colors.brand.primaryColor};
  }
`;

const DepartmentMenuItems = [
  {
    name: "Recruiting Coordinator",
    value: "Recruiting Coordinator",
  },
  {
    name: "Senior Product Designer",
    value: "Senior Product Designer",
  },
];

const LocationMenuItem = [
  {
    name: "London, UK",
    value: "London, UK",
  },
];

const JobTypeMenuItem = [
  {
    name: "Full time",
    value: "Full time",
  },
  {
    name: "Part Time",
    value: "Part Time",
  },
  {
    name: "Intern",
    value: "Intern",
  },
];

const SearchBar = () => {
  const theme = useTheme();

  const [filterValues, setFilterValues] = useState({
    search: "",
    departmentValue: "",
    locationValue: "",
    jobTypeValue: "",
  });

  const [isShow, setIsShow] = useState(false);

  const changeHandler = (type, value) => {
    setFilterValues({
      ...filterValues,
      [type]: value,
    });
  };

  const submitHandler = (value) => {
    setIsShow(true);
    console.log(value);
  };

  return (
    <>
      <Box
        display="inline-block"
        width="full"
        height={{ base: "auto", lg: "100px" }}
        border="1px solid #ECEDF2"
        borderRadius="8px"
        boxShadow="0px 6px 15px 0px #404F680D"
        marginBottom="30px"
        padding={{ base: "20px", lg: "0px 20px" }}
      >
        <Box display="flex" alignItems="center" width="full" height="full">
          <Grid
            templateColumns={{
              base: "repeat(12, 1fr)",
            }}
            templateRows={{
              base: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(1, 1fr)",
            }}
            width="full"
          >
            <GridItem
              colStart={{ base: 2, md: 1, lg: 1 }}
              colEnd={{ base: 12, md: 13, lg: 6 }}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    height="60px"
                    children={<FiSearch color="#696969" fontSize="20px" />}
                  />
                  <Input
                    type="text"
                    placeholder="Job title, keywords"
                    borderColor={{ base: "#e2e8f0", lg: "transparent" }}
                    fontSize="15px"
                    fontWeight="400px"
                    color="#696969"
                    height="60px"
                    onChange={(e) => changeHandler("search", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
            </GridItem>

            <GridItem
              colStart={{ base: 1, md: 1, lg: 6 }}
              colEnd={{ base: 13, md: 5, lg: 8 }}
              borderRight={{ base: "none", lg: "1px solid #ECEDF2" }}
              borderLeft={{ base: "none", lg: "1px solid #ECEDF2" }}
            >
              <MenuComponent
                menuName="Department"
                leftIcon={<Bagsvg />}
                MenuItems={DepartmentMenuItems}
                onClick={(value) => changeHandler("departmentValue", value)}
              />
            </GridItem>

            <GridItem
              colStart={{ base: 1, md: 5, lg: 8 }}
              colEnd={{ base: 13, md: 9, lg: 10 }}
              borderRight={{ base: "none", lg: "1px solid #ECEDF2" }}
            >
              <MenuComponent
                menuName="Location"
                leftIcon={<GrLocation className="location_icon" />}
                MenuItems={LocationMenuItem}
                onClick={(value) => changeHandler("locationValue", value)}
              />
            </GridItem>

            <GridItem
              colStart={{ base: 1, md: 9, lg: 10 }}
              colEnd={{ base: 13, md: 13, lg: 12 }}
            >
              <MenuComponent
                menuName="Job Type"
                leftIcon={<Clocksvg />}
                MenuItems={JobTypeMenuItem}
                onClick={(value) => changeHandler("jobTypeValue", value)}
              />
            </GridItem>

            <GridItem
              colStart={{ base: 1, md: 1, lg: 12 }}
              colEnd={{ base: 13, md: 13, lg: 13 }}
            >
              <CommonButton
                text="Find Jobs"
                type="button"
                onClick={() => {
                  submitHandler(filterValues);
                }}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {isShow && (
        <HStack spacing={4} marginBottom="58px">
          {filterValues?.departmentValue.length > 0 && (
            <TagStyled
              size="lg"
              borderRadius="full"
              variant="solid"
              background={hexToRGB(theme.colors.brand.primaryColor, 0.07)}
              height="45px"
              theme={theme}
            >
              <TagLabel
                fontSize="14px"
                fontWeight="400"
                color="brand.primaryColor"
              >
                {filterValues?.departmentValue}
              </TagLabel>
              <GrFormClose />
            </TagStyled>
          )}

          {filterValues?.locationValue.length > 0 && (
            <TagStyled
              size="lg"
              borderRadius="full"
              variant="solid"
              background={hexToRGB(theme.colors.brand.primaryColor, 0.07)}
              height="45px"
              theme={theme}
            >
              <TagLabel
                fontSize="14px"
                fontWeight="400"
                color="brand.primaryColor"
              >
                {filterValues?.locationValue}
              </TagLabel>
              <GrFormClose />
            </TagStyled>
          )}

          {filterValues?.jobTypeValue.length > 0 && (
            <TagStyled
              size="lg"
              borderRadius="full"
              variant="solid"
              background={hexToRGB(theme.colors.brand.primaryColor, 0.07)}
              height="45px"
              theme={theme}
            >
              <TagLabel
                fontSize="14px"
                fontWeight="400"
                color="brand.primaryColor"
              >
                {filterValues?.jobTypeValue}
              </TagLabel>
              <GrFormClose />
            </TagStyled>
          )}
        </HStack>
      )}
    </>
  );
};

export default SearchBar;
