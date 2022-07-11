import TilesTable from "@/components/TilesTable";
import { Flex, Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
interface ITiles {
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  heights: string;
  createdAt: string;
  updatedAt: string;
}

const Tiles = () => {
  const [tiles, setTiles] = useState<ITiles>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_TILES as string, { method: "get" }).then(({ data }) => {
      setTiles(data[0]);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Tiles Data</Heading>
      <TilesTable tiles={tiles} />
    </Flex>
  );
};

export default Tiles;
