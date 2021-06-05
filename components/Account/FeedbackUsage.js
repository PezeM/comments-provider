import {
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

export const FeedbackUsage = () => {
  const color = useColorModeValue('gray.700', 'gray.100');

  return (
    <StatGroup>
      <Stat>
        <StatLabel color={color}>Comments</StatLabel>
        <StatNumber fontWeight="medium">∞</StatNumber>
        <StatHelpText>10,000 limit</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel color={color}>Sites</StatLabel>
        <StatNumber fontWeight="medium">1/∞</StatNumber>
        <StatHelpText>Unlimited Sites</StatHelpText>
      </Stat>
    </StatGroup>
  );
};
