import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { LogoIcon } from '@/styles/icons';
import { useAuth } from '@/lib/auth';
import NextLink from 'next/link';
import { Footer } from '@/components/Footer';
import { ToggleColorModeButton } from '@/components/ToggleColorModeButton';

export const DashboardContainer = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box
      backgroundColor="gray.100"
      h="100vh"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <Flex backgroundColor="white" mb={[8, 16]} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="70px"
        >
          <Flex>
            <NextLink href={'/'} passHref>
              <LogoIcon color="black" boxSize={6} mr={8} />
            </NextLink>
            <NextLink href={'/sites'} passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href={'/feedback'} passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>

          <Flex justifyContent={'center'} alignItems={'center'}>
            <ToggleColorModeButton mr={[2, 4]} />
            <NextLink href="/account" passHref>
              <Link display={'flex'} justifyContent="center" alignItems="center">
                <Text mr={2}>{user?.name}</Text>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        margin="0 auto"
        direction="column"
        maxW="1250px"
        px={8}
        width={'100%'}
        flex={'1 0 auto'}
      >
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};
