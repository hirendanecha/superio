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
        bg="#f5f6f7"
        color="white"
        background="#1967D2"
        _hover={{ bg: '#1967D2' }}
        _active={{
          bg: '#1967D2',
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
