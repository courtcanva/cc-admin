import { ITemplateDataDb } from "@/interfaces/template";
import { TableContainer, Table, Thead, Tr, Th, Text } from "@chakra-ui/react";
import TemplatesAuditItem from "./TemplatesAuditItem";
import { TemplateAuditHeads } from "../../constants/TemplatesHeads";

interface Prop {
  templates: Omit<ITemplateDataDb, "__v" | "isDeleted">[] | undefined;
}

const TemplatesAuditTable = (props: Prop) => {
  const templateEmpty = props.templates?.length === 0;
  return (
    <>
      {!templateEmpty ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {TemplateAuditHeads.map((item) => {
                  return <Th key={item.id}>{item.title}</Th>;
                })}
              </Tr>
            </Thead>
            {props.templates?.map((template) => (
              <TemplatesAuditItem key={template._id} template={template}></TemplatesAuditItem>
            ))}
            {/* {props.templates?.map((template) => <TemplatesAuditItem key={template._id} template={template}></TemplatesAuditItem>)} */}
          </Table>
        </TableContainer>
      ) : (
        <Text> There is no censoring court template!</Text>
      )}
    </>
  );
};
export default TemplatesAuditTable;
