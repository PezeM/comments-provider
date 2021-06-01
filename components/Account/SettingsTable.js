import { Badge, Box, Flex, Text } from '@chakra-ui/react';

export const SettingsTable = ({ stripeRole, children }) => {
  return (
    <Box
      backgroundColor="white"
      mt={8}
      borderRadius={[0, 8, 8]}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
    >
      <Flex
        backgroundColor="gray.50"
        borderTopLeftRadius={[0, 8, 8]}
        borderTopRightRadius={[0, 8, 8]}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        px={6}
        py={4}
      >
        <Flex justify="space-between" align="center" w="full">
          <Text textTransform="uppercase" fontSize="xs" color="gray.500" fontWeight="medium" mt={1}>
            Settings
          </Text>
          <Badge h="1rem" colorScheme={'blue'}>
            {stripeRole}
          </Badge>
        </Flex>
      </Flex>
      <Flex direction="column" p={6}>
        {children}
      </Flex>
    </Box>
  );
};
