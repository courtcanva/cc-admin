import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const DeleteComfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} justifyContent="center">
            <FaTrashAlt
              size={35}
              style={{ color: "red", marginTop: "25px", marginBottom: "10px" }}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"}>
            <p>Are you sure you want to remove this admin ?</p>
          </ModalBody>
          <ModalFooter display={"flex"} gap="10px" marginTop={"10px"}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" marginRight={3} onClick={onConfirm}>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteComfirmModal;
