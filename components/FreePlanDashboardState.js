import React from 'react';
import { DashboardContainer } from '@/components/DashboardContainer';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

export const FreePlanDashboardState = () => {
  return (
    <DashboardContainer>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading size={'md'}>Add comments to your site.</Heading>
        <Text>Easy, fast solution</Text>
        <Button>Upgrade plan</Button>
      </Box>
    </DashboardContainer>
  );
};
