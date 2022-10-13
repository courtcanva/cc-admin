import {
  Button,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import formatDate from "@/utils/formatDate";
import { api } from "@/utils/axios";
import { BiPencil } from "react-icons/bi";
import router from "next/router";
interface AdminProp {
  adminName: string;
  email: string;
  password: string;
  hashedRefreshToken: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  permission: string;
}
const AdminAccounts = () => {
  const [adminAccData, setAdminAccData] = useState<AdminProp[]>([
    {
      adminName: "TestAdmin_1",
      email: "123@gmail.com",
      password: "123",
      hashedRefreshToken: "123",
      createdAt: "2020-01-01 12:00:00",
      updatedAt: "2020-01-01 12:00:00",
      isDeleted: false,
      permission: "Super",
    },
  ]);

  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_ADMIN as string, { method: "get" }).then(({ data }) => {
      setAdminAccData(data);
    });
  }, []);
  const addNewAdminHandler = () => {
    router.push({
      pathname: "admin/add-new-admin",
    });
  };

  const adminTableHeader = [
    "Admin Name",
    "Email",
    "Created At",
    "Updated At",
    "Permission",
    "is Deleted",
    "Operation",
  ];
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Admin Accounts</Heading>
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<AddIcon />}
        onClick={addNewAdminHandler}
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {adminTableHeader.map((account) => (
                <Th key={account} textAlign="center">
                  {account}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {adminAccData.map((adminAcc) => {
              adminAcc["createdAt"] = formatDate(adminAcc.createdAt as string);
              adminAcc["updatedAt"] = formatDate(adminAcc.updatedAt as string);
              const { adminName, email, createdAt, updatedAt, permission, isDeleted } = adminAcc;
              return (
                <>
                  <Tr key={email}>
                    {Object.entries({
                      adminName,
                      email,
                      createdAt,
                      updatedAt,
                      permission,
                      isDeleted,
                    }).map(([key, value]) => {
                      return (
                        <Td key={key} textAlign="center">
                          {value}
                        </Td>
                      );
                    })}
                    <Td textAlign="center">
                      <IconButton aria-label="detail" icon={<BiPencil />} />
                      <IconButton aria-label="edit" icon={<DeleteIcon />} />
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default AdminAccounts;
