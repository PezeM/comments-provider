import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { AddSiteModal } from '@/components/Site/AddSiteModal';
import { useBoxBackgroundColor } from '@/styles/hooks/useBoxBackgroundColor';

export const EmptyDashboardState = () => {
  const boxBg = useBoxBackgroundColor();

  return (
    <Flex
      width="100%"
      justify={'center'}
      direction={'column'}
      background={boxBg}
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
