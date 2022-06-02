import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Logo from '../../../assets/pngs/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={'pointer'}
      width="full"
      height="110px"
      boxShadow="0px 6px 15px 0px #404F680D"
      zIndex="111"
      position="fixed"
      background="white"
      onClick={()=>navigate("/")}
    >
      <Image src={Logo} alt="logo" />
    </Box>
  );
};

export default Header;
