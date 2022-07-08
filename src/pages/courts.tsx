import {
  Flex,
  Table,
  Text,
  TableContainer,
  Tbody,
  Heading,
  Th,
  Thead,
  Tr,
  Td,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { api } from "@/utils/axios";
interface ICourt {
  _id: string;
  name: string;
  length: number;
  width: number;
  centreCircleRadius: number;
  threePointRadius: number;
  threePointLine: number;
  lengthOfCorner: number;
  restrictedAreaLength: number;
  restrictedAreaWidth: number;
  sideBorderWidth: number;
  lineBorderWidth: number;
  description: string;
  createdAt: Date,
  updatedAt: Date,
  isDeleted?: boolean
}
const courts = () => {
  const [courtsData, setCourtsData] = useState<ICourt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_COURTS as string, { method: "get" }).then(({ data }) => {
      setCourtsData(data);
      setLoading(false);
    });
  }, []);

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
      leftIcon={<AddIcon /> }
      >
        New
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Length</Th>
              <Th>Width</Th>
              <Th>Centre Circle Radius</Th>
              <Th>Three Point Radius</Th>
              <Th>Three Point Line</Th>
              <Th>Length Of Corner</Th>
              <Th>Restricted Area Length</Th>
              <Th>Restricted Area Width</Th>
              <Th>Side Border Width</Th>
              <Th>Line Border Width</Th>
              <Th>Description</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {courtsData.map((court) => {
              delete court["isDeleted"];
              return (
              <Tr key={court._id}>
                {
                Object.entries(court).map(([key, value]) => {
                  return (
                    <Td key={key} textAlign="center">
                      {JSON.stringify(value)}
                    </Td>
                  );
                })
                }
                <Td>
                  <IconButton aria-label="Edit" icon={<BiPencil />}/>
                </Td>
              </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default courts;
