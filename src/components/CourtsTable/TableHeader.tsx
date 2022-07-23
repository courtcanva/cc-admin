import { courtsTableHeader } from "@/constants/courtsTabelHeader";
import { Th, Thead, Tr } from "@chakra-ui/react";

const TableHeader = () => {
  return (
    <Thead>
      <Tr>
        {courtsTableHeader.map((item) => (
          <Th key={item} textAlign="center">
            {item}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
export default TableHeader;
