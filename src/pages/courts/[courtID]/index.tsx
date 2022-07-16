import {
  Text,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ICourt } from "@/interfaces/courtData";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { BiPencil } from "react-icons/bi";
import formatDate from "@/utils/formatDate";
import { idRouteHandler } from "@/utils/routeHandler";
import { headerCellGenerator } from "@/utils/headerCellGenerator";

const CourtDetail = () => {
  const [courtData, setCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const courtId = router.query.courtID;
  const apiUrl = `courts/${courtId}`;

  useEffect(() => {
    api(apiUrl as string, { method: "get" }).then(({ data }) => {
      ["_id", "isDeleted"].forEach((e) => delete data[e]);
      delete data.isDeleted;
      data["createdAt"] = formatDate(data.createdAt);
      data["updatedAt"] = formatDate(data.createdAt);
      setCourtData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading marginTop="50px">ID: {courtId}</Heading>
      <TableContainer maxWidth="600px" marginY="20px">
        <Table variant="simple">
          <Tbody>
            {courtData &&
              Object.entries(courtData).map(([key, value]) => {
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
      <Button
        width="100px"
        marginRight="10px"
        marginY="20px"
        leftIcon={<BiPencil />}
        onClick={() => idRouteHandler(`${courtId}/edit`)}
      >
        Edit
      </Button>
    </Flex>
  );
};

export default CourtDetail;
