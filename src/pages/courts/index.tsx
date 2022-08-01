import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Heading,
  Tr,
  Td,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { api } from "@/utils/axios";
import { ICourt } from "@/interfaces/courtData";
import { CgDetailsMore } from "react-icons/cg";
import formatDate from "@/utils/formatDate";
import TableHeader from "@/components/CourtsTable";
import { routeHandler } from "@/utils/routeHandler";

const courts = () => {
  const toast = useToast();
  const [courtsData, setCourtsData] = useState<ICourt[]>([]);
  const getAllCourtData = async () => {
    try {
      const response = await api("courts", { method: "get" });
      if (response.status >= 300 || response.status < 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCourtsData(response.data);
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
    getAllCourtData();
  }, []);

  return (
    <Flex flexDirection="column" maxWidth="1000" margin="0 auto">
      <Heading marginTop="50px">Courts Data</Heading>
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<AddIcon />}
        onClick={() => routeHandler("courts", "new")}
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <TableHeader />
          <Tbody>
            {courtsData.map((court) => {
              court["createdAt"] = formatDate(court.createdAt);
              court["updatedAt"] = formatDate(court.updatedAt);
              const { _id, name, createdAt, updatedAt } = court;
              return (
                <>
                  <Tr key={court._id} _hover={{ bg: "gray.50" }}>
                    {Object.entries({ name, createdAt, updatedAt }).map(([key, value]) => {
                      return (
                        <Td key={key} textAlign="center">
                          {value}
                        </Td>
                      );
                    })}
                    <Td>
                      <IconButton
                        aria-label="detail"
                        icon={<CgDetailsMore />}
                        onClick={() => routeHandler("courts", _id)}
                      />
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

export default courts;
