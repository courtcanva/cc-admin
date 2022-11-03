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
  Text,
} from "@chakra-ui/react";
import { RiMenuAddFill } from "react-icons/ri";
import { useEffect } from "react";
import { ICourt } from "@/interfaces/courtData";
import { CgDetailsMore } from "react-icons/cg";
import { useGetAllCourtQuery } from "../../redux/api/courtsApi";
import { useUpdateCourtMutation } from "../../redux/api/courtsApi";
import formatDate from "@/utils/formatDate";
import TableHeader from "@/components/TableHeader";
import { COURTS_TABLE_HEADER } from "@/constants/tabelHeaders";
import SwitchButton from "@/components/SwitchButton/SwitchButton";
import { routeHandler } from "@/utils/routeHandler";

const courts = () => {
  const toast = useToast();
  const {
    data: courtsData,
    isError,
    isLoading,
    error,
  } = useGetAllCourtQuery(0, {
    selectFromResult: (result) => {
      if (result.data) {
        result.data = [...result.data].sort((a, b) => a.isHidden - b.isHidden);
      }
      return result;
    },
  });

  const [updateCourt] = useUpdateCourtMutation();
  const switchBtnHandler = (court: ICourt) => {
    updateCourt({ ...court, isHidden: !court.isHidden });
  };

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
  return (
    <Flex flexDirection="column" maxWidth="1000" margin="0 auto">
      <Heading marginTop="50px">Courts Data</Heading>
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<RiMenuAddFill />}
        onClick={() => routeHandler("courts", "new")}
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <TableHeader tableHeaderData={COURTS_TABLE_HEADER} />
          <Tbody>
            {isLoading && <Text>Please wait while the courts data are loading...</Text>}
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
                      <SwitchButton
                        initialState={!court.isHidden}
                        switchBtnHandler={() => switchBtnHandler(court)}
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
