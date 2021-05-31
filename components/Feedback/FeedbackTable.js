import React from 'react';
import { Box, Code } from '@chakra-ui/react';
import { Table, Td, Th, Tr } from '@/components/Table';

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
            <Td>{'Visible'}</Td>
            <Td>{'Remove'}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
