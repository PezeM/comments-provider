import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteFeedback } from '@/lib/database';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';

export const RemoveFeedbackButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const { user } = useAuth();

  const onClose = () => setIsOpen(false);
  const onDelete = async () => {
    await deleteFeedback(feedbackId);
    onClose();
    await mutate(['/api/feedback', user.token]);
  };

  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="blue"
        aria-label="Delete feedback"
        icon={<DeleteIcon />}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
