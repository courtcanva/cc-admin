import {
  Flex,
  Table,
  Text,
  TableContainer,
  Tbody,
  Heading,
  Tr,
  Td,
  IconButton,
  Button,
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
  const [courtsData, setCourtsData] = useState<ICourt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_COURTS as string, { method: "get" }).then(({ data }) => {
      setCourtsData(data);
      setLoading(false);
    });
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Flex flexDirection="column">
      <Heading marginTop="50px">Courts Data</Heading>
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<AddIcon />}
        onClick={() => routeHandler("new")}
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <TableHeader />
          <Tbody>
            {courtsData.map((court) => {
              court["createdAt"] = formatDate(court.createdAt);
              court["updatedAt"] = formatDate(court.createdAt);
              const { _id, name, createdAt, updatedAt } = court;
              return (
                <>
                  <Tr key={court._id} _hover={{ bg: "gray.50" }}>
                    {Object.entries({ _id, name, createdAt, updatedAt }).map(([key, value]) => {
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
                        onClick={() => routeHandler(_id)}
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
