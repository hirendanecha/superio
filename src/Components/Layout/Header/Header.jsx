import React from "react";
import { Box } from "@chakra-ui/react";
import { SuperioSvgLogo } from "../../../assets/svgs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={"pointer"}
      width="full"
      height="110px"
      boxShadow="0px 6px 15px 0px #404F680D"
      zIndex="111"
      position="fixed"
      background="white"
      onClick={() => navigate("/")}
    >
      <SuperioSvgLogo />
    </Box>
  );
};

export default Header;
