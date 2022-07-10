import TilesInfo from "@/components/TilesInfo";
import TilesTable from "@/components/TilesTable";
import { Flex, IconButton } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
interface ITiles {
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  heights: string;
  createAt: string;
  updateAt: string;
}

const Tiles = () => {
  const [tiles, setTiles] = useState<ITiles[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_TILES as string, { method: "get" }).then(({ data }) => {
      setTiles(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  console.log(tiles);
  return (
    <Flex flexDirection="column">
      <TilesInfo tiles={tiles} />
      <IconButton
        margin="auto"
        marginRight="80px"
        width="40px"
        aria-label="Edit"
        icon={<BiAddToQueue />}
      />
      <TilesTable tiles={tiles} />
    </Flex>
  );
};

export default Tiles;
