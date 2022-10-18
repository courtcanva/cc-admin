import { Text, Button, Flex, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ICourt } from "@/interfaces/courtData";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { BiPencil } from "react-icons/bi";
import formatDate from "@/utils/formatDate";
import { idRouteHandler, routeHandler } from "@/utils/routeHandler";
import { headerCellGenerator } from "@/utils/headerCellGenerator";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const CourtDetail = () => {
  const [courtData, setCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const courtId = router.query.courtID;
  const apiUrl = `courts/${courtId}`;

  useEffect(() => {
    const fetchCourts = async () => {
      const { data } = await api(apiUrl as string, { method: "get" });
      ["_id", "isDeleted", "isHidden"].forEach((e) => delete data[e]);
      data["createdAt"] = formatDate(data.createdAt);
      data["updatedAt"] = formatDate(data.updatedAt);
      setCourtData(data);
      setLoading(false);
    };
    fetchCourts();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Flex flexDirection="column" width="600px" margin="0 auto">
      <Flex justifyContent="space-between">
        <Button
          width="100px"
          marginRight="10px"
          marginY="50px"
          leftIcon={<ChevronLeftIcon />}
          onClick={() => routeHandler("courts")}
        >
          Back
        </Button>
        <Button
          width="100px"
          marginRight="10px"
          marginY="50px"
          leftIcon={<BiPencil />}
          onClick={() => idRouteHandler(`${courtId}/edit`)}
        >
          Edit
        </Button>
      </Flex>
      <TableContainer width="600px" marginY="20px">
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
    </Flex>
  );
};

export default CourtDetail;
