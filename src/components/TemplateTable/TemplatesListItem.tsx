import { ITemplateDataDb } from "@/interfaces/template";
import { Tbody, Td, Tr, useDisclosure, Tag, Flex, Image } from "@chakra-ui/react";
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
            <Flex height="200px" justify="center">
              <Image height="full" src={image} alt='court preview' objectFit="contain" onClick={onOpen} />
            </Flex>
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
