import React, { useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { createCheckoutSession } from '@/lib/database';
import { useAuth } from '@/lib/auth';
import { MainButton } from '@/components/MainButton';
import { useBoxBackgroundColor } from '@/styles/hooks/useBoxBackgroundColor';

export const UpgradeRoleDashboardState = () => {
  const { user } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
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
