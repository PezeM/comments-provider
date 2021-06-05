import { Page } from '@/components/Page';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';
import React, { useState } from 'react';
import { LogoIcon } from '@/styles/icons';
import { useLogoIconColor } from '@/styles/hooks/useLogoIconColor';
import { MainButton } from '@/components/MainButton';
import {useBackgroundColor} from "@/styles/hooks/useBackgroundColor";
import {useFormBackgroundColor} from "@/styles/hooks/useFormBackgroundColor";

const EmailLogin = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { signinWithEmail } = useAuth();
  const { handleSubmit, register, errors } = useForm();
  const bgColor = useBackgroundColor();
  const formBgColor = useFormBackgroundColor();

  const onLogin = async ({ email, pass }) => {
    setLoading(true);

    try {
      await signinWithEmail(email, pass);
    } catch (e) {
      setLoading(false);

      toast({
        title: 'An error occurred.',
        description: e.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh" background={bgColor}>
      <Stack
        as="form"
        backgroundColor={formBgColor}
        borderRadius={[0, 8]}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit(data => onLogin(data))}
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        m={[4, 8]}
        w="100%"
      >
        <Flex justify="center">
          <Box as="a" href="/" aria-label="Back to homepage">
            <LogoIcon color={useLogoIconColor()} boxSize={8} />
          </Box>
        </Flex>

        <FormControl isInvalid={errors?.email && errors?.email?.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            autoFocus
            aria-label="Email Address"
            id="email"
            name="email"
            placeholder="example@example.com"
            {...register('email', {
              required: 'Enter your email.',
            })}
          />
          <FormErrorMessage>{errors?.email && errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.pass && errors.pass?.message}>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="pass"
            id="password"
            type="password"
            {...register('pass', {
              required: 'Enter your password.',
            })}
          />
          <FormErrorMessage>{errors?.pass && errors.pass?.message}</FormErrorMessage>
        </FormControl>

        <MainButton id="login" type="submit" isLoading={loading} mt={4} h="50px" fontSize="lg">
          Login
        </MainButton>
      </Stack>
    </Flex>
  );
};

export default function EmailLoginPage() {
  return (
    <Page name="Login" path="/login/email">
      <EmailLogin />
    </Page>
  );
}
