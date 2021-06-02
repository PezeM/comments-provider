import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/icons';
import React from 'react';
import { Feedback } from '@/components/Feedback/Feedback';
import { FeedbackLink } from '@/components/Feedback/FeedbackLink';
import { getAllFeedback } from '@/lib/database-admin';
import { LoginButtons } from '@/components/LoginButtons';

const SITE_ID = '7B1tCoGiaWrranqFEZvd';

export async function getStaticProps(context) {
  const { feedbacks } = await getAllFeedback(SITE_ID);

  return {
    props: {
      allFeedback: feedbacks,
    },
    revalidate: 1,
  };
}

export default function Home({ allFeedback }) {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16}>
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
            <LogoIcon color="black" boxSize={8} mr={8} />
          </Center>

          <Center>
            <Text mb={4} fontSize="lg" py={4}>
              <Text as="span" fontWeight="bold" display="inline">
                Comments provider
              </Text>
              {' is an application used to inject comments to your site. '}
            </Text>
          </Center>

          {auth.user ? (
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
                onClick={() => auth.signOut()}
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
            <LoginButtons />
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
        backgroundColor={'white'}
      >
        <FeedbackLink siteId={SITE_ID} />
        {allFeedback.map(feedback => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  );
}
