import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from '@/components/Table';
import { RemoveFeedbackButton } from '@/components/Feedback/RemoveFeedbackButton';
import React, { useState } from 'react';
import { updateFeedback } from '@/lib/database';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';

export const FeedbackRow = ({ feedback }) => {
  const { user } = useAuth();
  const [isChecked, setIsChecked] = useState(feedback.status === 'active');

  const onFeedbackToggle = async () => {
    setIsChecked(!isChecked);
    await updateFeedback(feedback.id, { status: !isChecked ? 'active' : 'pending' });
    // For revalidating the cache
    await mutate(['/api/feedback', user.token]);
  };

  return (
    <Box as="tr" key={feedback.id}>
      <Td fontWeight={'medium'}>{feedback.author}</Td>
      <Td>{feedback.text}</Td>
      <Td>
        <Code
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
          display={'inherit'}
          maxW={'150px'}
          overflow={'hidden'}
        >
          {feedback.route ?? `/`}
        </Code>
      </Td>
      <Td>
        <Switch colorScheme="green" isChecked={isChecked} onChange={onFeedbackToggle} />
      </Td>
      <Td>
        <RemoveFeedbackButton feedbackId={feedback.id} />
      </Td>
    </Box>
  );
};
