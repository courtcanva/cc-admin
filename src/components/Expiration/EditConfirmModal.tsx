import { IExpiration } from "@/interfaces/expirationData";
import { useUpdateExpirationMutation } from "../../redux/api/expirationApi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentExpireDays: number;
}

const EditConfirmModal = (props: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { onClose, isOpen, currentExpireDays } = props;
  const toast = useToast();
  const [updateExpiration] = useUpdateExpirationMutation();

  const onConfirm = async () => {
    const newExpireDays = ref.current?.value;
    if (!newExpireDays || Number(newExpireDays) === currentExpireDays) return;
    const newExpiration = { expireDays: Number(newExpireDays) } as IExpiration;
    await updateExpiration(newExpiration)
      .unwrap()
      .then((_res) => {
        onClose();
      })
      .catch((err) => {
        return toast({
          title: `Oops`,
          description: `Error: ${err}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody textAlign="center" marginTop="60px">
            <NumberInput defaultValue={currentExpireDays} step={1} min={1}>
              <NumberInputField ref={ref} data-testid="numberInput" autoFocus />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </ModalBody>
          <ModalFooter display="flex" gap="10px" marginTop="10px">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" marginRight="3" onClick={onConfirm}>
              Change
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditConfirmModal;
