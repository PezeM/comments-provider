import React from 'react';
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
} from '@chakra-ui/react';
import { LogoIcon } from '@/styles/icons';
import { useAuth } from '@/lib/auth';

export const DashboardContainer = ({ children }) => {
  const { user, signOut } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        py={4}
        px={8}
        backgroundColor={'white'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack isInline={true} spacing={4} align={'center'}>
          <LogoIcon color="black" boxSize={8} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems={'center'}>
          {user && (
            <Button mr={4} variant={'ghost'} onClick={() => signOut()}>
              Log out
            </Button>
          )}
          <Avatar size={'sm'} src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor={'gray.200'} p={8} height="100vh" direction="column" px={8}>
        <Flex maxWidth={'1250px'} w={'100%'} direction={'column'} mr={'auto'} ml={'auto'}>
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color={'gray.700'} fontSize={'sm'}>
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color={'black'} mb={8}>
            My sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
