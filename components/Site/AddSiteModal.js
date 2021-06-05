import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/database';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';
import { MainButton } from '@/components/MainButton';

export const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, reset } = useForm();
  const toast = useToast();
  const { user } = useAuth();

  const onCreateSite = async ({ name, url }) => {
    await createSite({
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: false,
      },
    });

    toast({
      title: 'Success!',
      description: 'Successfully added new site',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    reset(undefined, { keepValues: false });
    onClose();
    await mutate(['/api/sites', user.token]);
  };

  return (
    <>
      <MainButton onClick={onOpen}>{children}</MainButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Site name"
                name="name"
                {...register('name', {
                  required: 'Required',
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                {...register('url', {
                  required: 'Required',
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button colorScheme={'blue'} fontWeight="medium" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
