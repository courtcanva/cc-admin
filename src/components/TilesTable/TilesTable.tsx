import Link from "next/link";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import formatDate from "@/utils/formatDate";
import TilesTableItemList from "./TilesTableItemList";
import ColorBoard from "./components/ColorBoard";

const TilesTable = ({ tiles }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {TilesTableItemList.map((item) => {
              return <Th>{item.title}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{tiles.name}</Td>
            <Td>{tiles._id}</Td>
            <Td>{tiles.width}</Td>
            <Td>{tiles.length}</Td>
            <Td>{formatDate(tiles.createdAt)}</Td>
            <Td>{formatDate(tiles.updatedAt)}</Td>
            <Td>
              <Popover>
                <PopoverTrigger
                  children={
                    <IconButton
                      aria-label="Rb"
                      children={<IoColorPaletteOutline />}
                      display="fixed"
                    />
                  }
                />

                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <ColorBoard colors={tiles.colors} />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Td>
            <Td>
              <Link
                href={{
                  pathname: "/tiles/[id]",
                  query: { id: tiles._id },
                }}
              >
                <IconButton aria-label="Edit" icon={<BiPencil />} />
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default TilesTable;
