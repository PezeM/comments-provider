import { useRouter } from 'next/router';
import { getAllFeedback, getAllSites } from '@/lib/database-admin';
import { Feedback } from '@/components/Feedback/Feedback';
import { FeedbackLink } from '@/components/Feedback/FeedbackLink';
import { Box } from '@chakra-ui/react';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedbacks } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedbacks,
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

export default function EmbeddedFeedbackPage({ initialFeedback }) {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" width="full">
      <FeedbackLink siteId={router.query.siteId} />
      {initialFeedback &&
        initialFeedback.map(feedback => <Feedback key={feedback.id} {...feedback} />)}
    </Box>
  );
}
