import { ITemplateDataDb } from "@/interfaces/template";
import { Box, Tbody, Td, Tr, useDisclosure, Tag } from "@chakra-ui/react";
import Image from "next/image";
import CourtPreviewModal from "./CourtPreviewModal";

interface Prop {
  template: Omit<ITemplateDataDb, "__v" | "isDeleted">;
}

const TemplatesListItem = (prop: Prop) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user_id: userId, design, image, description, tags, status, createdAt } = prop.template;
  const submitTime = new Date(createdAt);

  return (
    <>
      <Tbody>
        <Tr>
          {/* account id */}
          <Td>{userId}</Td>
          {/* template name */}
          <Td>{design.designName}</Td>
          {/* Template Preview */}
          <Td>
            <Box width="full" height="200px" position="relative">
              <Image src={image} layout="fill" objectFit="contain" onClick={onOpen} />
            </Box>
          </Td>
          {/* description */}
          <Td minWidth="150px" maxWidth="400px" whiteSpace="pre-line">
            {description}
          </Td>
          {/* publisher */}
          <Td>{design.designer}</Td>
          {/* status */}
          <Td>
            <Tag>{status}</Tag>
          </Td>
          {/* submit date */}
          <Td>{submitTime.toLocaleString()}</Td>
          {/* court type */}
          <Td>{tags.CourtType}</Td>
          {/* court size */}
          <Td whiteSpace="pre-wrap">{`Length:${design.courtSize.length}mm
          Width:${design.courtSize.width}mm`}</Td>
        </Tr>
      </Tbody>
      <CourtPreviewModal isOpen={isOpen} onClose={onClose} image={image} />
    </>
  );
};
export default TemplatesListItem;
