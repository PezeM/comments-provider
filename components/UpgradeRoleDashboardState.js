import React, { useState } from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { createCheckoutSession } from '@/lib/database';
import { useAuth } from '@/lib/auth';
import { MainButton } from '@/components/MainButton';

export const UpgradeRoleDashboardState = () => {
  const { user } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);

  return (
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
        Add ability to add comments to your site.
      </Heading>
      <Text mb={4}>"This site is an demo and billing is currently disabled"</Text>
      <MainButton
        onClick={() => {
          setCheckoutLoading(true);
          // createCheckoutSession(user.uid);
        }}
        mt={4}
        isLoading={isCheckoutLoading}
      >
        Upgrade to basic plan
      </MainButton>
    </Flex>
  );
};
