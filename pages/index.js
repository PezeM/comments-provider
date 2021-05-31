import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Flex } from '@chakra-ui/react';
import {GithubIcon, GoogleIcon} from '@/styles/icons';

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
        <Button
          leftIcon={<GoogleIcon />}
          mt={4}
          size="sm"
          onClick={() => auth.signIn()}
        >
          Sign in with GitHub
        </Button>
      )}
    </Flex>
  );
}
