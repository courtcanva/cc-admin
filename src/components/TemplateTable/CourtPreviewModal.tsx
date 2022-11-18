import { Modal, ModalOverlay, ModalContent, ModalBody, Box } from "@chakra-ui/react";
import Image from "next/image";

interface Prop {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const CourtPreviewModal = (props: Prop) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered={true} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Box width="full" height="550px" position="relative">
            <Image src={props.image} layout="fill" objectFit="contain" />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CourtPreviewModal;
