import React from 'react';
import { Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LogoIcon } from '@/styles/icons';

export const Navbar = () => {
  return (
    <Flex backgroundColor="white" mb={4} w="full">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={[4, 8]}
        pb={[4, 8]}
        maxW="1000px"
        margin="0 auto"
        w="full"
        px={8}
        h="60px"
      >
        <Flex align="center">
          <NextLink href="/" passHref>
            <Link>
              <LogoIcon color="black" boxSize={6} />
            </Link>
          </NextLink>
        </Flex>

        <Flex justifyContent="center" alignItems="center">
          <NextLink href="/pricing" passHref>
            <Link mr={4} fontWeight="medium">
              Pricing
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              backgroundColor="gray.900"
              color="white"
              h="32px"
              fontWeight="medium"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)',
              }}
            >
              Login
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
