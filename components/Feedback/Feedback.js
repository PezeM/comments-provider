import React from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Code, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon } from '@/styles/icons';
import ReactMarkdown from 'react-markdown';
import { MDXComponents } from '@/components/MDXComponents';
import remarkGfm from 'remark-gfm';
import { FeedbackAuthor } from '@/components/Feedback/FeedbackAuthor';

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

export const Feedback = ({
  author,
  text,
  createdAt,
  provider,
  authorEmail,
  isLast,
  settings,
  colorMode = 'light',
}) => {
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
        <FeedbackAuthor
          color={authorColor[colorMode]}
          email={authorEmail}
          provider={provider}
          authorName={author}
        />
        {settings?.icons && GetProviderLogo(provider)}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
      )}

      <Box color={textColor[colorMode]}>
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          components={{
            paragraph: MDXComponents.p,
            blockquote: MDXComponents.blockquote,
            link: MDXComponents.a,
            list: MDXComponents.ul,
            listItem: MDXComponents.li,
            table: MDXComponents.table,
            tableHead: MDXComponents.th,
            tableCell: MDXComponents.td,
            code: ({ value }) => (
              <pre>
                <Code borderRadius={8} p={4} my={4}>
                  {value}
                </Code>
              </pre>
            ),
            inlineCode: MDXComponents.inlineCode,
            ...MDXComponents,
          }}
        />
      </Box>

      {!isLast && (
        <Divider borderColor={dividerColor[colorMode]} backgroundColor="gray.200" mt={6} mb={6} />
      )}
    </Box>
  );
};
