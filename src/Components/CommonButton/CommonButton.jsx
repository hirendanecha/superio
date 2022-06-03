import React from 'react';
import { Box } from '@chakra-ui/react';

const CommonButton = ({ text, type, ...props }) => {
  return (
    <>
      <Box
        type={type ? type : 'button'}
        {...props}
        p={2}
        as="button"
        minH="60px"
        lineHeight="1.2"
        width="100%"
        px="8px"
        borderRadius="8px"
        fontSize="14px"
        fontWeight="400"
        color="white"
        background="brand.primaryColor"
        _hover={{ bg: 'brand.primaryColor' }}
        _active={{
          bg: 'brand.primaryColor',
        }}
        _focus={{
          boxShadow: 'none',
        }}
      >
        {text}
      </Box>
    </>
  );
};

export default CommonButton;
