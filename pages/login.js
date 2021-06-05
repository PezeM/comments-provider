import { Page } from '@/components/Page';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import React, { useEffect } from 'react';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/icons';
import { useRouter } from 'next/router';
import { useLogoIconColor } from '@/styles/hooks/useLogoIconColor';
import { useBackgroundColor } from '@/styles/hooks/useBackgroundColor';
import { useFormBackgroundColor } from '@/styles/hooks/useFormBackgroundColor';
import { MainButton } from '@/components/MainButton';

const Login = () => {
  const auth = useAuth();
  const router = useRouter();
  const bgColor = useBackgroundColor();
  const formBgColor = useFormBackgroundColor();

  useEffect(() => {
    if (auth.user) {
      router.push('/sites');
    }
  }, []);

  return (
    <Flex align="center" justify="center" h="100vh" backgroundColor={bgColor}>
      <Stack
        backgroundColor={formBgColor}
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        m={[4, 8]}
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
            <LogoIcon color={useLogoIconColor()} boxSize={8} mr={4} />
            <Text>Back to homepage</Text>
          </Box>
        </Flex>

        <MainButton
          onClick={() => auth.signInWithGithub('/sites')}
          leftIcon={<GithubIcon />}
          mt={2}
          h="50px"
        >
          Continue with GitHub
        </MainButton>

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
