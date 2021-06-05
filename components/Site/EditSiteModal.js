import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { updateSite } from '@/lib/database';
import { MainButton } from '@/components/MainButton';
import React from 'react';

export const EditSiteModal = ({ settings, siteId, children }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onUpdateSite = async newSettings => {
    await updateSite(siteId, {
      settings: newSettings,
    });

    toast({
      title: 'Success!',
      description: 'You have updated your site.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    await mutate(`/api/sites/${siteId}`);
    await mutate(`/api/feedback/${siteId}`);
    onClose();
  };

  return (
    <>
      <MainButton leftIcon={<SettingsIcon />} onClick={onOpen}>
        {children}
      </MainButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onUpdateSite)}>
          <ModalHeader fontWeight="bold">Edit Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Switch
                name="timestamp"
                color="green"
                defaultIsChecked={settings?.timestamp}
                {...register('timestamp')}
              />
              <FormLabel ml={2} htmlFor="show-timestamp">
                Show timestamp
              </FormLabel>
            </FormControl>
            <FormControl>
              <Switch
                name="icons"
                color="green"
                defaultIsChecked={settings?.icons}
                {...register('icons')}
              />
              <FormLabel ml={2} htmlFor="show-icons">
                Show icon
              </FormLabel>
            </FormControl>
            <FormControl>
              <Switch
                name="ratings"
                color="green"
                defaultIsChecked={settings?.ratings}
                {...register('ratings')}
              />
              <FormLabel ml={2} htmlFor="show-ratings">
                Show ratings
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button colorScheme={'blue'} fontWeight="medium" type="submit">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
