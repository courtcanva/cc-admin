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
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
interface ICourt {
  isDeleted: boolean;
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
}
const courts = () => {
  const [courtsData, setCourtsData] = useState<ICourt[]>([]);
  const [loading, setLoading] = useState(true);
  const loadCourts = async () => {
    const response = await axios.get<ICourt[]>("http://localhost:8080/v1/courts");
    setCourtsData(response.data);
  };

  useEffect(() => {
    loadCourts();
    setLoading(false);
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Courts Data</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Is Deleted</Th>
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
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {courtsData.map((court) => (
              <Tr key={court._id}>
                {Object.entries(court).map(([key, value]) => {
                  return (
                    <Td key={key} textAlign="center">
                      {JSON.stringify(value)}
                    </Td>
                  );
                })}
                <Td>
                  <IconButton aria-label="Edit" icon={<BiPencil />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default courts;
