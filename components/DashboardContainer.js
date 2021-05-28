import React from 'react';
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Link,
  Stack,
} from '@chakra-ui/react';
import { LogoIcon } from '@/styles/icons';

export const DashboardContainer = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Flex p={4} backgroundColor={'white'} alignItems={'center'} justifyContent={'space-between'}>
        <Stack isInline={true} spacing={4}>
          <LogoIcon color="black" boxSize={8} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems={'center'}>
          <Link mr={4}>Account</Link>
          <Avatar size={'sm'} />
        </Flex>
      </Flex>
      <Flex
        backgroundColor={'gray.200'}
        p={8}
        height="100%"
        direction="column"
        maxW="1250px"
        px={8}
      >
        >
        <Flex
          maxWidth={'800px'}
          justifyContent={'center'}
          alignItems={'center'}
          mr={'auto'}
          ml={'auto'}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color={'black'}>Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <Heading color={'black'}>Sites</Heading>
            {children}
          </Breadcrumb>
        </Flex>
      </Flex>
    </Flex>
  );
};
