import { createFeedback } from '@/lib/database';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { Feedback } from '@/components/Feedback/Feedback';
import { Box, FormControl, Textarea, useColorMode, useToast } from '@chakra-ui/react';
import { SiteHeader } from '@/components/Site/SiteHeader';
import { DashboardContainer } from '@/components/DashboardContainer';
import { LoginButtons } from '@/components/LoginButtons';
import useSWR, { mutate } from 'swr';
import { fetcher } from '@/utils/fetcher';
import { MainButton } from '@/components/MainButton';

export default function FeedbackPage() {
  const { user, loading } = useAuth();
  const { colorMode } = useColorMode();
  const toast = useToast();

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
    let text = inputRef.current.value?.trim();
    if (!text) return;

    const newFeedback = {
      siteId,
      siteAuthorId: site.authorId,
      route: route ?? '/',
      author: user.name,
      authorId: user.uid,
      authorEmail: user.email,
      text,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending',
    };

    inputRef.current.value = '';
    await createFeedback(newFeedback);
    await mutate(feedbackApi);

    toast({
      title: 'Success!',
      description: `Added new comment. Must be approved to be visible.`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  };

  const LoginOrLeaveFeedback = () =>
    user ? (
      <MainButton type="submit" isDisabled={!siteData || !feedbackData} mt={4}>
        Add comment
      </MainButton>
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
              colorMode={colorMode}
              {...feedback}
            />
          ))}
      </Box>
    </DashboardContainer>
  );
}
