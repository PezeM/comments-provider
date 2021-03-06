import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Box, Button, Center, Flex, Text, useColorMode } from '@chakra-ui/react';
import { LogoIcon } from '@/styles/icons';
import React from 'react';
import { Feedback } from '@/components/Feedback/Feedback';
import { FeedbackLink } from '@/components/Feedback/FeedbackLink';
import { getAllFeedback, getSite } from '@/lib/database-admin';
import { LoginButtons } from '@/components/LoginButtons';
import { Footer } from '@/components/Footer';

const SITE_ID = process.env.NEXT_PUBLIC_HOME_SITE_ID;

export async function getStaticProps(context) {
  const { feedbacks } = await getAllFeedback(SITE_ID);
  const { site } = await getSite(SITE_ID);

  return {
    props: {
      allFeedback: feedbacks,
      site,
    },
    revalidate: 1,
  };
}

export default function Home({ allFeedback, site }) {
  const { user, signOut } = useAuth();
  const { colorMode } = useColorMode();

  return (
    <Flex minH={'100vh'} direction={'column'} justifyContent={'column'}>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="750px" margin="0 auto">
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('comments-provider-auth')) {
                window.location.href = "/sites"
              }
            `,
              }}
            />
          </Head>
          <Center>
            <LogoIcon color={'black'} boxSize={8} mr={8} />
          </Center>

          <Center>
            <Text mb={4} fontSize="lg" py={4} color={'black'}>
              <Text as="span" fontWeight="bold" display="inline">
                Comments provider
              </Text>
              <Text as="span" display="inline">
                {' is an application used to inject comments to your site.'}
              </Text>
            </Text>
          </Center>

          {user ? (
            <>
              <Button
                mt={4}
                size="lg"
                href={'/sites'}
                as={'a'}
                backgroundColor={'gray.900'}
                color={'white'}
                fontWeight={'medium'}
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
              >
                View dashboard
              </Button>
              <Button
                mt={4}
                size="lg"
                onClick={() => signOut()}
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
                Sign Out
              </Button>
            </>
          ) : (
            <LoginButtons margin={'0 auto'} />
          )}
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="750px"
        margin="0 auto"
        mt={12}
        px={4}
        flex={'1 0 auto'}
      >
        <FeedbackLink paths={[SITE_ID]} colorMode={colorMode} />
        {allFeedback.map((feedback, index) => (
          <Feedback
            key={feedback.id}
            settings={site?.settings}
            isLast={index === allFeedback.length - 1}
            colorMode={colorMode}
            {...feedback}
          />
        ))}
      </Box>
      <Footer />
    </Flex>
  );
}