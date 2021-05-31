import React from 'react';
import { Box, Code, IconButton, Switch } from '@chakra-ui/react';
import { Table, Td, Th, Tr } from '@/components/Table';
import { DeleteIcon } from '@chakra-ui/icons';

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
              <IconButton
                variant="ghost"
                colorScheme="blue"
                aria-label="Delete feedback"
                icon={<DeleteIcon />}
              />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
