import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from '@/components/Table';
import { RemoveDialog } from '@/components/RemoveDialog';
import React, { useState } from 'react';

export const FeedbackRow = ({ feedback }) => {
  const [isChecked, setIsChecked] = useState(feedback.status === 'active');

  const onFeedbackToggle = e => {
    setIsChecked(!isChecked);
  };

  return (
    <Box as="tr" key={feedback.id}>
      <Td fontWeight={'medium'}>{feedback.author}</Td>
      <Td>{feedback.text}</Td>
      <Td>
        <Code>{`/`}</Code>
      </Td>
      <Td>
        <Switch colorScheme="green" isChecked={isChecked} onChange={onFeedbackToggle} />
      </Td>
      <Td>
        <RemoveDialog feedbackId={feedback.id} />
      </Td>
    </Box>
  );
};
