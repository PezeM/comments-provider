import React from 'react';
import { Footer } from '@/components/Footer';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';

export const DocsLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box maxW="700px" mx="auto" px={8}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
