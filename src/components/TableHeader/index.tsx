import { Th, Thead, Tr } from "@chakra-ui/react";
interface Props {
  tableHeaderData: string[];
}

const TableHeader = ({ tableHeaderData }: Props) => {
  return (
    <Thead>
      <Tr>
        {tableHeaderData.map((item) => (
          <Th key={item} textAlign="center">
            {item}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
export default TableHeader;
