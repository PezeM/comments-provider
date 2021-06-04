import React from 'react';
import { Footer } from '@/components/Footer';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';

export const DocsLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        maxW="700px"
        mx="auto"
        px={8}
        w={'100%'}
        overflowWrap={'break-word'}
        wordBreak={'break-all'}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
