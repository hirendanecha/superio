import React from 'react';
import { Box } from '@chakra-ui/react';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from '../../Components/Footer/Footer';
import SubFooter from '../../Components/SubFooter/SubFooter';

const Layout = () => {
  return (
    <>
      <Header />
      <Box display="inline-block" width="full" marginTop="110px">
        <Content />
        <Footer />
        <SubFooter />
      </Box>
    </>
  );
};

export default Layout;
