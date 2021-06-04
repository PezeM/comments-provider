import React from 'react';
import { Footer } from '@/components/Footer';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';
import { useBackgroundColor } from '@/styles/hooks/useBackgroundColor';

export const DocsLayout = ({ children }) => {
  const boxBg = useBackgroundColor();

  return (
    <>
      <Navbar />
      <Box h={'100%'} w={'100%'} background={boxBg}>
        <Box
          maxW="700px"
          mx="auto"
          px={8}
          pt={4}
          w={'100%'}
          overflowWrap={'break-word'}
          wordBreak={'break-all'}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};
