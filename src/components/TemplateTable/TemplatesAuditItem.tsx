import { ITemplateDataDb } from "@/interfaces/template";
import { useUpdateTemplateMutation } from "../../redux/api/templateApi";
import {
  Box,
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
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import CourtPreviewModal from "./CourtPreviewModal";

interface Prop {
  template: Omit<ITemplateDataDb, "__v" | "isDeleted">;
}

const TemplatesAuditItem = (prop: Prop) => {
  const [updateOperation, setupdateOperation] = useState<string>("");
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
    setupdateOperation("Publish");
    onConfirmOpen();
  };

  const handleRejectTemplate = () => {
    setupdateOperation("Reject");
    onConfirmOpen();
  };

  const handleComfirmAudit = () => {
    updateTemplateStatus(updateOperation);
    onConfirmClose();
  };

  return (
    <>
      <Tbody>
        <Tr>
          {/* template preview */}
          <Td>
            <Box width="full" height="200px" position="relative">
              <Image src={image} layout="fill" objectFit="contain" onClick={onImageOpen} />
            </Box>
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
        <ModalContent>
          <ModalHeader>Confirm the operation</ModalHeader>
          <ModalBody>
            <Text>{confirmationAlertText}</Text>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center" gap="2rem">
            <Button width="5rem" colorScheme="pink" variant="solid" onClick={handleComfirmAudit}>
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
