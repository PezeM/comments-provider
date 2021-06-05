import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import {useBoxBackgroundColor} from "@/styles/hooks/useBoxBackgroundColor";

export const FeedbackEmptyState = () => {
  const boxBg = useBoxBackgroundColor();

  return (
    <Flex
      width="100%"
      backgroundColor={boxBg}
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
};