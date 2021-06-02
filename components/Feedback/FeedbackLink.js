import { Flex, Link } from '@chakra-ui/react';

export const FeedbackLink = ({ paths }) => {
  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link fontWeight="bold" fontSize="sm" href={`/sites/${paths.join('/')}`} target={'_blank'}>
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="blackAlpha.500" href="/" target={'_blank'}>
        Powered by Comments Provider
      </Link>
    </Flex>
  );
};
