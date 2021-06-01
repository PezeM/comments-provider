import React from 'react';
import { Table, Th, Tr } from '@/components/Table';
import { FeedbackRow } from '@/components/Feedback/FeedbackRow';

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
          <FeedbackRow feedback={feedback} key={feedback.id} />
        ))}
      </tbody>
    </Table>
  );
};
