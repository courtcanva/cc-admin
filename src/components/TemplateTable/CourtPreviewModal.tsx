import { Modal, ModalOverlay, ModalContent, ModalBody, Image, Flex } from "@chakra-ui/react";

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
        <ModalBody data-testid="court-preview">
          <Flex width="full" height="550px" position="relative" justify="center">
            <Image height="full" src={props.image} alt='court preview' />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CourtPreviewModal;
