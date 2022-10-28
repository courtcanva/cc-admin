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
import { BiRefresh } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const RestoreComfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center">
            <BiRefresh
              size={35}
              style={{ color: "green", marginTop: "25px", marginBottom: "10px" }}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"}>
            <p>Are you sure you want to restore the deleted admin ?</p>
          </ModalBody>
          <ModalFooter display={"flex"} gap="10px" marginTop={"10px"}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" marginRight={3} onClick={onConfirm}>
              Restore
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RestoreComfirmModal;
