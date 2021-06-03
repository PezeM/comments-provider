import { createFeedback } from '@/lib/database';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { Feedback } from '@/components/Feedback/Feedback';
import { Box, Button, FormControl, Textarea } from '@chakra-ui/react';
import { SiteHeader } from '@/components/SiteHeader';
import { DashboardContainer } from '@/components/DashboardContainer';
import { LoginButtons } from '@/components/LoginButtons';
import useSWR, { mutate } from 'swr';
import { fetcher } from '@/utils/fetcher';

export default function FeedbackPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const inputRef = useRef(null);
  const siteAndRoute = router.query?.site;
  const siteId = siteAndRoute ? siteAndRoute[0] : null;
  const route = siteAndRoute ? siteAndRoute[1] : null;
  const feedbackApi = route ? `/api/feedback/${siteId}/${route}` : `/api/feedback/${siteId}`;

  const { data: siteData } = useSWR(`/api/site/${siteId}`, fetcher);
  const { data: feedbackData } = useSWR(feedbackApi, fetcher);

  const site = siteData?.site;
  const allFeedback = feedbackData?.feedback;

  const onSubmit = async e => {
    e.preventDefault();

    const newFeedback = {
      siteId,
      siteAuthorId: site.authorId,
      route: route ?? '/',
      author: user.name,
      authorId: user.uid,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending',
    };

    inputRef.current.value = '';
    await createFeedback(newFeedback);
    await mutate(
      feedbackApi,
      async data => ({
        feedback: [newFeedback, ...data.feedback],
      }),
      false,
    );
  };

  const LoginOrLeaveFeedback = () =>
    user ? (
      <Button
        type="submit"
        isDisabled={!siteData || !feedbackData}
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
      <SiteHeader
        isSiteOwner={site?.authorId === user?.uid}
        site={site}
        siteId={siteId}
        route={route}
      />

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
              isDisabled={!user}
              minHeight={'100px'}
            />
            {!loading && <LoginOrLeaveFeedback />}
          </FormControl>
        </Box>

        {allFeedback &&
          allFeedback.map((feedback, index) => (
            <Feedback
              key={feedback.id}
              settings={site?.settings}
              isLast={index === allFeedback.length - 1}
              {...feedback}
            />
          ))}
      </Box>
    </DashboardContainer>
  );
}
