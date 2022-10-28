import {
  Text,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { idRouteHandler, routeHandler } from "@/utils/routeHandler";
import { headerCellGenerator } from "@/utils/headerCellGenerator";
import { RiArrowLeftSLine, RiEdit2Line } from "react-icons/ri";
import { useGetAdminByIdQuery } from "@/redux/api/adminApi";

const AdminDetail = () => {
  const router = useRouter();
  const adminId = router.query.adminID as string;
  const toast = useToast();
  const { data: adminData, isError, isLoading, error } = useGetAdminByIdQuery(adminId);
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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Flex flexDirection="column" width="600px" margin="0 auto">
      <Flex justifyContent="space-between">
        <Button
          width="100px"
          marginRight="10px"
          marginY="50px"
          leftIcon={<RiArrowLeftSLine />}
          onClick={() => routeHandler("admin")}
        >
          Back
        </Button>
        <Button
          width="100px"
          marginRight="10px"
          marginY="50px"
          leftIcon={<RiEdit2Line />}
          onClick={() => idRouteHandler(`${adminId}/edit`)}
        >
          Edit
        </Button>
      </Flex>
      <TableContainer width="600px" marginY="20px">
        <Table variant="simple">
          <Tbody>
            {adminData &&
              Object.entries(adminData).map(([key, value]) => {
                const headerCellContent = headerCellGenerator(key);
                return (
                  <Tr key={key}>
                    <Td>{headerCellContent}</Td>
                    <Td>{value}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default AdminDetail;
