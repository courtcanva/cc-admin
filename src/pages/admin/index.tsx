import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useDisclosure,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { RiEdit2Line, RiMenuAddFill, RiRepeatLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { idRouteHandler, routeHandler } from "@/utils/routeHandler";
import DeleteComfirmModal from "@/components/ConfirmModal/DeleteComfirmModal";
import RestoreComfirmModal from "@/components/ConfirmModal/RestoreComfirmModal";
import {
  useGetAllAdminQuery,
  useDeleteAdminMutation,
  useRestoreAdminMutation,
} from "@/redux/api/adminApi";
import { IAdmin } from "@/interfaces/adminData";
import DropDownFilter from "@/components/Admin/DropDownFilter";

interface FilterType {
  isActive: boolean;
  isDelete: boolean;
}
const AdminAccounts = () => {
  const [adminIdToDelete, setAdminIdToDelete] = useState("");
  const [adminIdToRestore, setAdminIdToRestore] = useState("");
  const [currentModal, setCurrentModal] = useState("");
  const [deleteAdmin] = useDeleteAdminMutation();
  const [restoreAdmin] = useRestoreAdminMutation();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [filterValue, setFilterValue] = useState<FilterType>();

  const confirmDeleteAdmin = (id: string) => {
    deleteAdmin(id);
    onModalClose();
  };

  const restoreDeletedAdmin = (id: string) => {
    restoreAdmin(id);
    onModalClose();
  };

  const handleValueChange = (value: FilterType) => {
    setFilterValue(value);
  };

  const toast = useToast();
  const { data: adminAccData, isError, isLoading, error } = useGetAllAdminQuery();

  useEffect(() => {
    if (isError && error && "data" in error)
      toast({
        title: `Can not get data, ${error.status}`,
        description: "Try again or contact IT support",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
  }, [isError, error]);

  const adminTableHeader = [
    "Admin Name",
    "Email",
    "Created At",
    "Updated At",
    "Permission",
    "Status",
    "Operation",
  ];

  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Admin Accounts</Heading>
      <DropDownFilter handleValueChange={handleValueChange} />
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<RiMenuAddFill />}
        onClick={() => routeHandler("admin", "add-new-admin")}
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {adminTableHeader.map((header) => (
                <Th key={header} textAlign="center">
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {adminAccData
              ?.filter((admin: IAdmin) => {
                if (!filterValue) return true;
                return (
                  (filterValue.isDelete && admin.isDeleted) ||
                  (!admin.isDeleted && filterValue.isActive)
                );
              })
              .map((adminAcc: IAdmin) => {
                const { _id, name, email, createdAt, updatedAt, permission, isDeleted } = adminAcc;
                return (
                  <>
                    <Tr key={_id}>
                      <Td textAlign="left">{name}</Td>
                      <Td textAlign="left">{email}</Td>
                      <Td textAlign="center">{createdAt}</Td>
                      <Td textAlign="center">{updatedAt}</Td>
                      <Td textAlign="center" textTransform="capitalize">
                        {permission}
                      </Td>
                      <Td textAlign="center">{isDeleted ? <Icon as={ImBlocked} /> : "Active"}</Td>
                      <Td>
                        <ButtonGroup
                          display="flex"
                          justifyContent="center"
                          variant="outline"
                          spacing="1"
                        >
                          {!isDeleted ? (
                            <>
                              <IconButton
                                aria-label="admin detail"
                                icon={
                                  <RiEdit2Line onClick={() => idRouteHandler(`admin/${_id}`)} />
                                }
                              />
                              <IconButton
                                aria-label="delete admin"
                                icon={<FaTrashAlt />}
                                onClick={() => {
                                  setCurrentModal("Delete");
                                  setAdminIdToDelete(_id);
                                  onModalOpen();
                                }}
                              />
                            </>
                          ) : (
                            <IconButton
                              aria-label="restore admin"
                              icon={<RiRepeatLine />}
                              onClick={() => {
                                setCurrentModal("Restore");
                                setAdminIdToRestore(_id);
                                onModalOpen();
                              }}
                            />
                          )}
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  </>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      {isLoading && <Text textAlign="center">Please wait for the loading of admin data.</Text>}
      {currentModal === "Delete" && (
        <DeleteComfirmModal
          isOpen={isModalOpen}
          onClose={onModalClose}
          onConfirm={() => confirmDeleteAdmin(adminIdToDelete)}
          shownText={"Are you sure you want to restore this admin?"}
        />
      )}
      {currentModal === "Restore" && (
        <RestoreComfirmModal
          isOpen={isModalOpen}
          onClose={onModalClose}
          onConfirm={() => restoreDeletedAdmin(adminIdToRestore)}
          shownText={"Are you sure you want to restore this admin?"}
        />
      )}
    </Flex>
  );
};

export default AdminAccounts;
