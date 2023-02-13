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
  currentData: number;
  updateData: any;
  step: number;
  min: number;
  max: number;
  precision: number;
}

const EditConfirmModal = (props: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { onClose, isOpen, currentData, updateData, precision, step, min, max } = props;
  const toast = useToast();
  const [updateCurrentData] = updateData;

  const onConfirm = async () => {
    const newData = ref.current?.value;
    if (!newData || Number(newData) === currentData) return;
    const newCurrentData = { expireDays: Number(newData) };
    await updateCurrentData(newCurrentData)
      .unwrap()
      .then((_res: any) => {
        onClose();
      })
      .catch((err: any) => {
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
            <NumberInput
              defaultValue={currentData}
              precision={precision}
              step={step}
              min={min}
              max={max}
            >
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
