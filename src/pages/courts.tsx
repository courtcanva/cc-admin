import { Flex, Table, TableContainer, Tbody, Td, Heading, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const courts = () => {
  const [courtsData, setCourtsData] = useState([])
  const loadCourts = async () => {
		const response = await axios.get("http://localhost:8080/v1/courts");
		setCourtsData(response.data);
	};
  
  useEffect(() => {
    loadCourts()
  }, [])
 console.log(courtsData)
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Courts Data</Heading>
      <TableContainer>
        <Table variant='simple'>
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
              <Th>Create Date</Th>
              <Th>Update Date</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
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
              <Th>Create Date</Th>
              <Th>Update Date</Th>
              <Th>Edit</Th>
            </Tr>
          </Tfoot>
        </Table>
    </TableContainer>
  </Flex>
  )
};

export default courts;
