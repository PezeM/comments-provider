import React from 'react';
import { DashboardContainer } from '@/components/DashboardContainer';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { AddSiteModal } from '@/components/AddSiteModal';

export const EmptyDashboardState = () => {
  return (
    <DashboardContainer>
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
        <AddSiteModal />
      </Flex>
    </DashboardContainer>
  );
};
