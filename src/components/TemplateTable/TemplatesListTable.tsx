import { ITemplateDataDb } from "@/interfaces/template";
import { TableContainer, Table, Thead, Tr, Th, Text } from "@chakra-ui/react";
import { TemplatesListHeads } from "../../constants/TemplatesHeads";
import TemplatesListItem from "./TemplatesListItem";

interface Prop {
  templates: Omit<ITemplateDataDb, "__v" | "isDeleted">[] | undefined;
}

const TemplatesListTable = (props: Prop) => {
  const templateEmpty = props.templates?.length === 0;
  return (
    <>
      {!templateEmpty ? (
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
      ) : (
        <Text> There is no template in the database!</Text>
      )}
    </>
  );
};
export default TemplatesListTable;
