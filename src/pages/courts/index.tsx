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
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { ICourt } from "@/interfaces/courtData";
import { CgDetailsMore } from "react-icons/cg";
import { useGetAllCourtQuery } from "@/redux/api/courtsApi";
import formatDate from "@/utils/formatDate";
import TableHeader from "@/components/CourtsTable";
import SwitchButton from "@/components/CourtsTable/SwitchButton";
import { routeHandler } from "@/utils/routeHandler";

const courts = () => {
  const toast = useToast();
  const {
    data: courtsData,
    isError,
    error,
  } = useGetAllCourtQuery(0, {
    selectFromResult: (result) => {
      if (result.data) {
        result.data = result.data
          .filter((court: ICourt) => court.isHidden === false)
          .concat(result.data.filter((court: ICourt) => court.isHidden !== false));
      }
      return result;
    },
  });

  useEffect(() => {
    if (isError) {
      if (error && "data" in error)
        toast({
          title: `Can not get data, ${error.status}`,
          description: "Try again or contact IT support",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
    }
  }, [isError, error]);

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
            {courtsData?.map((court: ICourt) => {
              const courtCopy = { ...court };
              courtCopy["createdAt"] = formatDate(court.createdAt);
              courtCopy["updatedAt"] = formatDate(court.updatedAt);
              const { _id, name, createdAt, updatedAt } = courtCopy;
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
                    <Td>
                      <SwitchButton court={court} />
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
