import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Flex } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Comments Provider</title>
      </Head>

      {auth.user ? (
        <Button mt={4} variant="ghost" size="sm" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button mt={4} variant="ghost" size="sm" onClick={() => auth.signIn()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
