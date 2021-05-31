import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { DashboardContainer } from '@/components/DashboardContainer';
import { Box, Button } from '@chakra-ui/react';
import { createCheckoutSession, goToBillingPortal } from '@/lib/database';

export default function Account() {
  const { user, signout } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardContainer>
      <Box>
        <Button
          onClick={async () => {
            setCheckoutLoading(true);
            // await createCheckoutSession(user.uid);
          }}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          isLoading={isCheckoutLoading}
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)',
          }}
        >
          Upgrade to basic plan
        </Button>

        <Button
          onClick={async () => {
            setBillingLoading(true);
            // await goToBillingPortal();
          }}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          ml={4}
          isLoading={isBillingLoading}
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)',
          }}
        >
          View billing portal
        </Button>
        <Button ml={4} onClick={() => signout()}>
          Log out
        </Button>
      </Box>
    </DashboardContainer>
  );
}
