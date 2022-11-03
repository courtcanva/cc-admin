import TilesTable from "@/components/TilesTable";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { RiMenuAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { useRouter } from "next/router";
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
  const router = useRouter();
  useEffect(() => {
    api(process.env.NEXT_PUBLIC_API_TILES as string, { method: "get" }).then(({ data }) => {
      setTiles(data);
      setLoading(false);
    });
  }, []);
  const addNewHandler = () => {
    router.push({
      pathname: "tiles/add-new-tile",
    });
  };
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Tiles Data</Heading>
      <Button
        width="100px"
        alignSelf="flex-end"
        marginRight="10px"
        marginY="20px"
        leftIcon={<RiMenuAddFill />}
        onClick={addNewHandler}
      >
        New
      </Button>
      <TilesTable tiles={tiles} />
    </Flex>
  );
};

export default Tiles;
