import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

export const FeedbackEmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      There is not feedback added.
    </Heading>
    <Text mb={4}>Add new comments</Text>
  </Flex>
);