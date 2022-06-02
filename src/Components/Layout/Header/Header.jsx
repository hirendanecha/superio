import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Logo from '../../../assets/pngs/logo.png';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="110px"
      boxShadow="0px 6px 15px 0px #404F680D"
      zIndex="111"
      position="fixed"
      background="white"
    >
      <Image src={Logo} alt="logo" />
    </Box>
  );
};

export default Header;
