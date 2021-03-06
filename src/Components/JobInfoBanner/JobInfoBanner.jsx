import React from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { Bagsvg, Clocksvg } from "../../assets/svgs";
import { GrLocation } from "react-icons/gr";
import styled from "styled-components";
import { changeGradient } from "../../utils";

const LocationFlex = styled(Flex)`
  .location_icon {
    font-size: 17px;
  }

  .location_icon path {
    stroke: #696969;
  }
`;

const JobInfoBanner = () => {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        width="full"
        minHeight="250px"
        background={changeGradient(theme.colors.brand.primaryColor)}
        marginBottom="50px"
      >
        <Container
          maxW={[
            "container.sm",
            "container.md",
            "container.lg",
            "container.xl",
          ]}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            row={{ base: 2, md: 1 }}
            alignItems="center"
          >
            <Flex
              flexFlow="column"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Heading
                as="h3"
                fontSize={{ base: "22px", md: "26px" }}
                color="#202124"
                fontWeight="500"
                marginBottom="18px"
              >
                Product Designer / UI Designer
              </Heading>

              <Flex marginBottom="26px" gap="20px" flexWrap="wrap">
                <Flex align="center" gap="10px">
                  <Bagsvg />
                  <Text fontSize="14px" fontWeight="400" color="#696969">
                    Sales
                  </Text>
                </Flex>
                <LocationFlex align="center" gap="10px">
                  <GrLocation className="location_icon" />
                  <Text fontSize="14px" fontWeight="400" color="#696969">
                    London, UK
                  </Text>
                </LocationFlex>
                <Flex align="center" gap="10px">
                  <Clocksvg />
                  <Text fontSize="14px" fontWeight="400" color="#696969">
                    Full Time
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex justify="center">
              <Button
                background="brand.primaryColor"
                minWidth="220px"
                borderRadius="8px"
                fontSize="15px"
                fontWeight="400"
                color="white"
                height="50px"
                flexWrap="wrap"
                _hover={{
                  background: "brand.primaryColor",
                }}
                onClick={onOpen}
              >
                Apply For Job
              </Button>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign="center"
            fontSize={{ base: "22px", md: "29px" }}
            color="#202124"
            fontWeight="500"
          >
            Application Form
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody minHeight="500px"></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobInfoBanner;
