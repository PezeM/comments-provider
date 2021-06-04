import { Page } from '@/components/Page';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import React, { useEffect } from 'react';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/icons';
import { useRouter } from 'next/router';

const Login = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      router.push('/sites');
    }
  }, []);

  return (
    <Flex align="center" justify="center" h="100vh" backgroundColor={['white', 'gray.100']}>
      <Stack
        backgroundColor="white"
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Box
            as="a"
            href="/"
            aria-label="Back to homepage"
            mb={6}
            alignItems={'center'}
            flexDirection={'row'}
            display={'flex'}
          >
            <LogoIcon color="black" boxSize={8} mr={4} />
            <Text>Back to homepage</Text>
          </Box>
        </Flex>
        <Button
          onClick={() => auth.signInWithGithub('/sites')}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          leftIcon={<GithubIcon />}
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)',
          }}
        >
          Continue with GitHub
        </Button>

        <Button
          onClick={() => auth.signInWithGoogle('/sites')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon={<GoogleIcon />}
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)',
          }}
        >
          Continue with Google
        </Button>
      </Stack>
    </Flex>
  );
};

export default function LoginPage() {
  return (
    <Page name="Login" path="/login">
      <Login />
    </Page>
  );
}
