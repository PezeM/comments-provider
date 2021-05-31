import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { Table, Td, Th, Tr } from '@/components/Table';
import { RemoveDialog } from '@/components/RemoveDialog';

export const FeedbackTable = ({ feedbacks }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {feedbacks.map(feedback => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight={'medium'}>{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{`/`}</Code>
            </Td>
            <Td>
              <Switch colorScheme="green" defaultIsChecked={feedback.status === 'active'} />
            </Td>
            <Td>
              <RemoveDialog feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
