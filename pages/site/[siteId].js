import { createFeedback } from '@/lib/database';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { getAllFeedback, getAllSites, getSite } from '@/lib/database-admin';
import { Feedback } from '@/components/Feedback/Feedback';
import { Box, Button, FormControl, Textarea } from '@chakra-ui/react';
import { SiteHeader } from '@/components/SiteHeader';
import { DashboardContainer } from '@/components/DashboardContainer';
import { LoginButtons } from '@/components/LoginButtons';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedbacks } = await getAllFeedback(siteId);
  const { site } = await getSite(siteId);

  return {
    props: {
      initialFeedback: feedbacks,
      site,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map(site => {
    return {
      params: {
        siteId: site.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default function FeedbackPage({ initialFeedback, site }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const inputRef = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = e => {
    e.preventDefault();

    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId: router.query.siteId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending',
    };

    inputRef.current.value = '';
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  const LoginOrLeaveFeedback = () =>
    user ? (
      <Button
        type="submit"
        isDisabled={router.isFallback}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        Add comment
      </Button>
    ) : (
      <LoginButtons />
    );

  return (
    <DashboardContainer>
      <SiteHeader siteName={site?.name} />

      <Box
        display="flex"
        mx={4}
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
      >
        <Box as="form" onSubmit={onSubmit}>
          <FormControl mb={8}>
            <Textarea
              ref={inputRef}
              id="comment"
              placeholder="Leave a comment"
              minHeight={'100px'}
            />
            {!loading && <LoginOrLeaveFeedback />}
          </FormControl>
        </Box>

        {allFeedback && allFeedback.map(feedback => <Feedback key={feedback.id} {...feedback} />)}
      </Box>
    </DashboardContainer>
  );
}
