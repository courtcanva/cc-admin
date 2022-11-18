import { ITemplateDataDb } from "@/interfaces/template";
import { TableContainer, Table, Thead, Tr, Th } from "@chakra-ui/react";
import { TemplatesListHeads } from "../../constants/TemplatesHeads";
import TemplatesListItem from "./TemplatesListItem";

interface Prop {
  templates: Omit<ITemplateDataDb, "__v" | "isDeleted">[] | undefined;
}

const TemplatesTable = (props: Prop) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {TemplatesListHeads.map((item) => {
                return <Th key={item.id}>{item.title}</Th>;
              })}
            </Tr>
          </Thead>
          {props.templates?.map((template) => (
            <TemplatesListItem key={template._id} template={template}></TemplatesListItem>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};
export default TemplatesTable;
