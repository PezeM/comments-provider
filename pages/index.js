import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon } from '@/styles/icons';
import React from 'react';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if(document.cookie && document.cookie.includes('comments-provider-auth')) {
                    window.location.href = '/dashboard'
                }
            `,
          }}
        />
        <title>Comments Provider</title>
      </Head>

      {auth.user && (
        <Button as={'a'} mt={4} variant="ghost" size="sm" href={'/dashboard'}>
          View dashboard
        </Button>
      )}

      {auth.user ? (
        <Button mt={4} size="sm" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Stack>
          <Button
            leftIcon={<GithubIcon />}
            mt={4}
            size="lg"
            onClick={() => auth.signInWithGithub()}
            backgroundColor={'gray.900'}
            color={'white'}
            fontWeight={'medium'}
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)',
            }}
          >
            Sign in with GitHub
          </Button>

          <Button
            leftIcon={<GoogleIcon />}
            mt={4}
            size="lg"
            onClick={() => auth.signInWithGoogle()}
            backgroundColor={'white'}
            variant={'outline'}
            color={'gray.900'}
            fontWeight={'medium'}
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
          >
            Sign in with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}
