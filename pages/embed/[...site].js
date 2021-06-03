import { useRouter } from 'next/router';
import { getAllFeedback, getAllSites, getSite } from '@/lib/database-admin';
import { Box } from '@chakra-ui/react';
import { Feedback } from '@/components/Feedback/Feedback';
import { FeedbackLink } from '@/components/Feedback/FeedbackLink';
import 'iframe-resizer/js/iframeResizer.contentWindow';

export async function getStaticProps(context) {
  const [siteId, route] = context.params.site;
  const { feedbacks } = await getAllFeedback(siteId, route);
  const { site } = await getSite(siteId);

  return {
    props: {
      initialFeedback: feedbacks,
      site,
    },
    revalidate: true,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map(site => ({
    params: {
      site: [site.id.toString()],
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default function EmbeddedFeedbackPage({ initialFeedback, site }) {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" width="full">
      <FeedbackLink paths={router.query.site} />
      {initialFeedback?.length ? (
        initialFeedback.map((feedback, index) => (
          <Feedback
            key={feedback.id}
            settings={site?.settings}
            isLast={index === initialFeedback.length - 1}
            {...feedback}
          />
        ))
      ) : (
        <Box>There are no comments for this site.</Box>
      )}
    </Box>
  );
}
