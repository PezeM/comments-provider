import { Button, useColorModeValue } from '@chakra-ui/react';

export const MainButton = ({ children, ...props }) => {
  const buttonBg = useColorModeValue('gray.900', 'blackAlpha.600');
  const buttonHoverBg = useColorModeValue('gray.700', 'blackAlpha.500');
  const buttonActiveBg = useColorModeValue('gray.800', 'blackAlpha.400');
  const buttonColor = useColorModeValue('white', 'gray.100');

  return (
    <Button
      backgroundColor={buttonBg}
      color={buttonColor}
      fontWeight="medium"
      _hover={{ bg: buttonHoverBg }}
      _active={{
        bg: buttonActiveBg,
        transform: 'scale(0.95)',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
