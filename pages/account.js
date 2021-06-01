import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { DashboardContainer } from '@/components/DashboardContainer';
import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FeedbackUsage } from '@/components/Account/FeedbackUsage';
import { SettingsTable } from '@/components/Account/SettingsTable';
import { Page } from '@/components/Page';

function Account() {
  const { user, signOut } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardContainer>
      <Flex direction="column" maxW="600px" align={['left', 'center']} margin="0 auto">
        <Flex direction="column" align={['left', 'center']} ml={4}>
          <Avatar w={['3rem', '6rem']} h={['3rem', '6rem']} mb={4} src={user?.photoUrl} />
          <Heading letterSpacing="-1px">{user?.name}</Heading>
          <Text>{user?.email}</Text>
        </Flex>
        <SettingsTable stripeRole={user?.stripeRole}>
          <FeedbackUsage />
          <Text my={4}>
            Comments Provider uses Stripe to manage your subscriptions and payments. This site is an
            demo site and stripe is currently disabled.
          </Text>
          <Flex justify="flex-end">
            <Button variant="ghost" ml={4} onClick={() => signOut()}>
              Sign out
            </Button>
            <Button
              onClick={() => {
                setBillingLoading(true);
                // goToBillingPortal();
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
              Manage billing
            </Button>
          </Flex>
        </SettingsTable>
      </Flex>
    </DashboardContainer>
  );
}

export default function AccountPage() {
  return (
    <Page name={'Account'} path={'/account'}>
      <Account />
    </Page>
  );
}
