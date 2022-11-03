import { USERS_TABLE_HEADER } from "../../constants/usersTableHeader";
import { Th, Thead, Tr } from "@chakra-ui/react";

const UsersTableHeader = () => {
  return (
    <Thead>
      <Tr>
        {USERS_TABLE_HEADER.map((item) => (
          <Th key={item} textAlign="center">
            {item}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
export default UsersTableHeader;
