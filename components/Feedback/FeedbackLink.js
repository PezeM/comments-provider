import { Flex, Link } from '@chakra-ui/react';
import { useEmbedTheme } from '@/utils/useEmbedTheme';

export const FeedbackLink = ({ paths }) => {
  const colorMode = useEmbedTheme();
  const linkColor = {
    light: 'gray.900',
    dark: 'gray.100',
  };

  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link
        fontWeight="bold"
        color={linkColor[colorMode]}
        fontSize="sm"
        href={`/site/${paths?.join('/')}`}
        target={'_blank'}
      >
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target={'_blank'}>
        Powered by Comments Provider
      </Link>
    </Flex>
  );
};
