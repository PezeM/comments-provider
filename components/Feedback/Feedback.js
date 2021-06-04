import React from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon } from '@/styles/icons';
import { useEmbedTheme } from '@/utils/useEmbedTheme';

const GetProviderLogo = provider => {
  const link = provider.slice(0, -4);

  switch (link) {
    case 'github':
      return <GithubIcon boxSize={4} ml={2} />;
    case 'google':
      return <GoogleIcon boxSize={4} ml={2} />;
    default:
      return undefined;
  }
};

export const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  const colorMode = useEmbedTheme();
  const authorColor = {
    light: 'gray.900',
    dark: 'gray.200',
  };

  const textColor = {
    light: 'gray.800',
    dark: 'gray.300',
  };

  const dividerColor = {
    light: 'gray.200',
    dark: 'gray.700',
  };

  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align={'center'}>
        <Heading size="sm" as="h3" mb={0} fontWeight="medium" color={authorColor[colorMode]}>
          {author}
        </Heading>
        {settings?.icons && GetProviderLogo(provider)}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
      )}

      <Text color={textColor[colorMode]}>{text}</Text>
      {!isLast && (
        <Divider borderColor={dividerColor[colorMode]} backgroundColor="gray.200" mt={6} mb={6} />
      )}
    </Box>
  );
};
