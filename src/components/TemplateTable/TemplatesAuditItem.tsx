import { ITemplateDataDb } from "@/interfaces/template";
import { useUpdateTemplateMutation } from "../../redux/api/templateApi";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Tbody,
  Td,
  Tr,
  useDisclosure,
  Button,
  Flex,
  ModalFooter,
  ModalHeader,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import CourtPreviewModal from "./CourtPreviewModal";

interface Prop {
  template: Omit<ITemplateDataDb, "__v" | "isDeleted">;
}

const TemplatesAuditItem = (prop: Prop) => {
  const [updateOperation, setUpdateOperation] = useState<string>("");
  const { isOpen: isImageOpen, onOpen: onImageOpen, onClose: onImageClose } = useDisclosure();
  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();
  const { _id: templateId, user_id: userId, design, image, description } = prop.template;
  const [updateTemplate] = useUpdateTemplateMutation();

  const confirmationAlertText = `Confirm to ${updateOperation} the template (${design.designName})?`;

  const updateTemplateStatus = (status: string) => {
    const newTemplateStatus = {
      _id: templateId,
      status: status === "Publish" ? "published" : "illegal",
    };
    updateTemplate(newTemplateStatus);
  };

  const handlePublishTemplate = () => {
    setUpdateOperation("Publish");
    onConfirmOpen();
  };

  const handleRejectTemplate = () => {
    setUpdateOperation("Reject");
    onConfirmOpen();
  };

  const handleConfirmAudit = () => {
    updateTemplateStatus(updateOperation);
    onConfirmClose();
  };

  return (
    <>
      <Tbody data-testid="template audit item">
        <Tr>
          {/* template preview */}
          <Td>
            <Flex height="200px" justify="center">
              <Image
                height="full"
                src={image}
                alt="court preview"
                objectFit="contain"
                onClick={onImageOpen}
              />
            </Flex>
          </Td>

          {/* template name */}
          <Td>{design.designName}</Td>

          {/* description */}
          <Td minWidth="150px" maxWidth="400px" whiteSpace="pre-line">
            {description}
          </Td>

          {/* publisher */}
          <Td>{design.designer}</Td>

          {/* account id */}
          <Td>{userId}</Td>

          <Td>
            <Flex>
              <Button
                marginX="0.5rem"
                width="4rem"
                colorScheme="pink"
                onClick={handlePublishTemplate}
              >
                Publish
              </Button>
              <Button
                marginX="0.5rem"
                width="4rem"
                colorScheme="teal"
                onClick={handleRejectTemplate}
              >
                Reject
              </Button>
            </Flex>
          </Td>
        </Tr>
      </Tbody>
      <Modal isOpen={isConfirmOpen} onClose={onConfirmClose} isCentered={true} size="xs">
        <ModalOverlay />
        <ModalContent data-testid="confirmation-modal">
          <ModalHeader>Confirm the operation</ModalHeader>
          <ModalBody>
            <Text>{confirmationAlertText}</Text>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center" gap="2rem">
            <Button width="5rem" colorScheme="pink" variant="solid" onClick={handleConfirmAudit}>
              Confirm
            </Button>
            <Button width="5rem" colorScheme="teal" variant="outline" onClick={onConfirmClose}>
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CourtPreviewModal isOpen={isImageOpen} onClose={onImageClose} image={image} />
    </>
  );
};
export default TemplatesAuditItem;
