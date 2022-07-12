import {
  Text,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ICourt } from "@/interfaces/courtData";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { BiPencil } from "react-icons/bi";
import formatDate from "@/utils/formatDate";

const CourtDetail = () => {
  const [courtData, setCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const courtId = router.query.courtID;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_COURTS}/${courtId}`;
  const editHandler = () => {
    router.push({
      pathname: `${courtId}/edit`,
    });
  };

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
  // console.log(courtData)

  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading marginTop="50px">ID: {courtId}</Heading>
      <TableContainer maxWidth="600px" marginY="20px">
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Tbody>
            {Object.entries(courtData!).map(([key, value]) => {
              return (
                <Tr key={key}>
                  <Th>{key}</Th>
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
        onClick={editHandler}
      >
        Edit
      </Button>
    </Flex>
  );
};

export default CourtDetail;
