import { Badge, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useNavbarColor } from '@/styles/hooks/useNavbarColor';
import {useBoxBackgroundColor} from "@/styles/hooks/useBoxBackgroundColor";

export const SettingsTable = ({ stripeRole, children }) => {
  const boxBg = useBoxBackgroundColor();
  const headerBg = useNavbarColor();
  const settingsTextColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Box backgroundColor={boxBg} mt={8} borderRadius={[0, 8, 8]} shadow={'lg'}>
      <Flex
        backgroundColor={headerBg}
        borderTopLeftRadius={[0, 8, 8]}
        borderTopRightRadius={[0, 8, 8]}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        px={6}
        py={4}
      >
        <Flex justify="space-between" align="center" w="full">
          <Text
            textTransform="uppercase"
            color={settingsTextColor}
            fontSize="xs"
            fontWeight="medium"
            mt={1}
          >
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
