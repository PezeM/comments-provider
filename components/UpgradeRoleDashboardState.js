import React, { useState } from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { createCheckoutSession } from '@/lib/database';
import { useAuth } from '@/lib/auth';

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
      <Button
        onClick={() => {
          setCheckoutLoading(true);
          // createCheckoutSession(user.uid);
        }}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        isLoading={isCheckoutLoading}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        Upgrade to basic plan
      </Button>
    </Flex>
  );
};
