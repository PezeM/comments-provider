import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useBoxBackgroundColor } from '@/styles/hooks/useBoxBackgroundColor';
import { useNavbarColor } from '@/styles/hooks/useNavbarColor';
import {useFormBackgroundColor} from "@/styles/hooks/useFormBackgroundColor";

export const Th = props => {
  const color = useColorModeValue('gray.500', 'gray.400');

  return (
    <Text
      as="th"
      textTransform="uppercase"
      fontSize="xs"
      color={color}
      fontWeight="medium"
      px={4}
      {...props}
    />
  );
};

export const Td = props => {
  const color = useColorModeValue('gray.900', 'gray.50');
  const borderColor = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box
      as="td"
      color={color}
      p={4}
      borderBottom="1px solid"
      borderBottomColor={borderColor}
      {...props}
    />
  );
};

export const Tr = props => {
  const bgColor = useNavbarColor();
  const borderColor = useColorModeValue('gray.200', 'gray.400');

  return (
    <Box
      as="tr"
      backgroundColor={bgColor}
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottom="1px solid"
      borderBottomColor={borderColor}
      height="40px"
      {...props}
    />
  );
};

export const Table = props => {
  const boxBg = useBoxBackgroundColor();

  return (
    <Box
      as="table"
      textAlign="left"
      backgroundColor={boxBg}
      ml={0}
      mr={0}
      borderRadius={8}
      shadow={'lg'}
      {...props}
    />
  );
};
