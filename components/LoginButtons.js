import { useAuth } from '@/lib/auth';
import { Button, Flex } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon } from '@/styles/icons';
import React from 'react';
import { MainButton } from '@/components/MainButton';

export const LoginButtons = props => {
  const auth = useAuth();

  return (
    <Flex direction={['column', 'row']} {...props}>
      <MainButton
        leftIcon={<GithubIcon />}
        mt={4}
        mr={2}
        size="lg"
        onClick={() => auth.signInWithGithub()}
      >
        Sign in with GitHub
      </MainButton>

      <Button
        leftIcon={<GoogleIcon />}
        mt={4}
        size="lg"
        onClick={() => auth.signInWithGoogle()}
        backgroundColor={'white'}
        variant={'outline'}
        color={'gray.900'}
        fontWeight={'medium'}
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)',
        }}
      >
        Sign in with Google
      </Button>
    </Flex>
  );
};
