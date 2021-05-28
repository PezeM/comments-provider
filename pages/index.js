import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Comments Provider</title>
      </Head>

      <main>
        <Heading>Comments Provider Demo</Heading>

        <div>
          <Button onClick={() => auth.signIn()}>Sign In</Button>

          <Text>
            Current user: <Code>{auth.user ? auth?.user?.email : 'None'}</Code>
          </Text>

          {auth?.user && <Button onClick={() => auth.signOut()}>Sign Out</Button>}
        </div>
      </main>
    </div>
  );
}
