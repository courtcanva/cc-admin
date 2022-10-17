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
  useToast,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import formatDate from "@/utils/formatDate";
import { api } from "@/utils/axios";
import { BiPencil } from "react-icons/bi";
// import router from "next/router";
import { ImBlocked } from "react-icons/im";
import { routeHandler } from "@/utils/routeHandler";
// import DeleteComfirmModal from "@/components/DeleteComfirmModal";

interface AdminProp {
  _id: string;
  name: string;
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
    // {
    //   adminName: "TestAdmin_1",
    //   email: "123@gmail.com",
    //   password: "123",
    //   hashedRefreshToken: "123",
    //   createdAt: "2020-01-01 12:00:00",
    //   updatedAt: "2020-01-01 12:00:00",
    //   isDeleted: false,
    //   permission: "Super",
    // },
  ]);

  const toast = useToast();
  const getAllAdminData = async () => {
    try {
      const response = await api("admin", { method: "get" });
      if (response.status >= 300 || response.status < 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setAdminAccData(response.data);
    } catch (error) {
      toast({
        title: `Can not get data, ${error}`,
        description: "Try again or contact IT support",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    // api(process.env.NEXT_PUBLIC_API_ADMIN as string, { method: "get" }).then(({ data }) => {
    //   setAdminAccData(data);
    getAllAdminData();
  }, []);

  // const addNewAdminHandler = () => {
  //   router.push({
  //     pathname: "admin/add-new-admin",
  //   });
  // };

  // const editAdminHandler = () => {
  //   router.push({
  //     pathname: "admin/edit",
  //   });
  // }

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
        onClick={() => routeHandler("admin", "add-new-admin")}
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
              const { _id, name, email, createdAt, updatedAt, permission, isDeleted } = adminAcc;
              return (
                <>
                  <Tr key={email}>
                    {Object.entries({
                      name,
                      email,
                      createdAt,
                      updatedAt,
                      permission,
                    }).map(([key, value]) => {
                      return (
                        <Td key={key} textAlign="center">
                          {value}
                        </Td>
                      );
                    })}
                    <Td key={"isDeleted"} textAlign="center">
                      {isDeleted ? <ImBlocked /> : null}
                    </Td>
                    <Td textAlign="center">
                      <IconButton
                        aria-label="detail"
                        icon={<BiPencil onClick={() => routeHandler("admin", _id)} />}
                      />
                      <IconButton aria-label="edit" icon={<DeleteIcon />} />
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* < DeleteComfirmModal /> */}
    </Flex>
  );
};

export default AdminAccounts;
