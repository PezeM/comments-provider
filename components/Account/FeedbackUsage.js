import { Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

export const FeedbackUsage = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel color="gray.700">Comments</StatLabel>
        <StatNumber fontWeight="medium">∞</StatNumber>
        <StatHelpText>10,000 limit</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel color="gray.700">Sites</StatLabel>
        <StatNumber fontWeight="medium">1/∞</StatNumber>
        <StatHelpText>Unlimited Sites</StatHelpText>
      </Stat>
    </StatGroup>
  );
};
