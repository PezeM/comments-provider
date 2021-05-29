import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { AddSiteModal } from '@/components/AddSiteModal';

export const EmptyDashboardState = () => {
  return (
    <Flex
      width="100%"
      justify={'center'}
      direction={'column'}
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      align={'center'}
    >
      <Heading size={'lg'} mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Start, by adding site new site...</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  );
};
