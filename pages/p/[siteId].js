import { getAllFeedback, getAllSites } from '@/lib/database-admin';
import { Feedback } from '@/components/Feedback/Feedback';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { createFeedback } from '@/lib/database';

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

export default function SiteFeedback({ initialFeedback }) {
  const { user } = useAuth();
  const router = useRouter();
  const inputRef = useRef(null);
  const [allFeedbacks, setAllFeedbacks] = useState(initialFeedback);

  const onSubmit = async e => {
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

    setAllFeedbacks([newFeedback, ...allFeedbacks]);
    await createFeedback(newFeedback);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'full'}
      maxWidth={'700px'}
      margin={'0 auto'}
    >
      <Box as={'form'} onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input ref={inputRef} id="comment" colorScheme={'red'} placeholder="Leave a comment" />
          <Button
            mt={4}
            type="submit"
            fontWeight="medium"
            colorScheme={'blue'}
            isDisabled={router.isFallback}
          >
            Add comment
          </Button>
        </FormControl>
      </Box>

      {allFeedbacks &&
        allFeedbacks.map(feedback => {
          return <Feedback key={feedback.id} {...feedback} />;
        })}
    </Box>
  );
}
