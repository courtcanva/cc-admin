import { IUpdateDeposit } from "@/interfaces/depositData";
import { useUpdateDepositMutation } from "../../redux/api/depositApi";
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
  currentDeposit: number;
}

const EditConfirmModal = (props: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { onClose, isOpen, currentDeposit } = props;
  const toast = useToast();
  const [updateDeposit] = useUpdateDepositMutation();

  const onConfirm = async () => {
    const newDeposit = ref.current?.value;
    console.log("1", newDeposit);
    if (!newDeposit || Number(newDeposit) === currentDeposit) return;
    const newDepositRate = { depositRate: Number(newDeposit) } as IUpdateDeposit;
    await updateDeposit(newDepositRate)
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
            <NumberInput defaultValue={currentDeposit} precision={2} step={0.01} max={1} min={0}>
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
