import Link from "next/link";
import {
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

interface ITile {
  _id: string;
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  heights: string;
  createdAt: string;
  updatedAt: string;
}

const TilesTable = ({ tiles }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {TilesTableItemList.map((item) => {
              return <Th key={item.id}>{item.title}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tiles.map((tile: ITile) => {
            return (
              <Tr key={tile._id}>
                <Td>{tile.name}</Td>
                <Td>{tile._id}</Td>
                <Td>{tile.width}</Td>
                <Td>{tile.length}</Td>
                <Td>{formatDate(tile.createdAt as string)}</Td>
                <Td>{formatDate(tile.updatedAt as string)}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <IconButton aria-label="Rb" display="fixed">
                        <IoColorPaletteOutline />
                      </IconButton>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>
                        <ColorBoard colors={tile.colors} />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                <Td>
                  <Link
                    href={{
                      pathname: "/tiles/[id]",
                      query: { id: tile._id },
                    }}
                  >
                    <IconButton aria-label="Edit" icon={<BiPencil />} />
                  </Link>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default TilesTable;
