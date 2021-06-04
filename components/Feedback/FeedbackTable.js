import React from 'react';
import { Table, Th, Tr } from '@/components/Table';
import { FeedbackRow } from '@/components/Feedback/FeedbackRow';
import {Box} from "@chakra-ui/react";

export const FeedbackTable = ({ feedbacks }) => {
  return (
    <Box overflowX={'auto'}>
      <Table w={'full'}>
        <thead>
          <Tr>
            <Th minW={'100px'}>Name</Th>
            <Th>Feedback</Th>
            <Th>Route</Th>
            <Th>Visible</Th>
            <Th>{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <FeedbackRow feedback={feedback} key={feedback.id} />
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
