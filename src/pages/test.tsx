import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { Button, FormControl, FormLabel, Input, Flex, Box } from "@chakra-ui/react";

interface ITiles {
  _id: string;
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  heights: string;
  createAt: string;
  updateAt: string;
}
const test = () => {
  const [tiles, setTiles] = useState<ITiles[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [length, setLength] = useState(300);
  const [width, setWidth] = useState(300);
  const [color, setColor] = useState([]);
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
  const handleSubmit = () => {
    try {
      api(`${process.env.NEXT_PUBLIC_API_TILES}/${tiles[0]._id}`, {
        method: "put",
        requestData: { ...tiles[0], color, length, width, name },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChang = (index: any) => (e: any) => {
    console.log("index: " + index);
    console.log("property name: " + e.currentTarget.value);
    let newArr: any = [...tiles[0].colors]; // copying the old datas array
    console.log(newArr);
    newArr[index].name = e.currentTarget.value;
    setColor(newArr);
  };

  const handleChangValue = (index: any) => (e: any) => {
    console.log("index: " + index);
    console.log("property name: " + e.currentTarget.value);
    let newArr: any = [...tiles[0].colors]; // copying the old datas array
    console.log(newArr);
    newArr[index].value = e.currentTarget.value;
    setColor(newArr);
  };

  // const handleChang = (colors: any) => {
  //   colors = [...tiles[0].colors];
  //   setColors(colors);
  // };
  console.log(width);
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Tile Name</FormLabel>
        <Input
          placeholder={tiles[0].name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tile Length</FormLabel>
        <Input
          placeholder={tiles[0].length}
          onChange={(event) => setLength(+event.currentTarget.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tile Width</FormLabel>
        <Input
          placeholder={tiles[0].width}
          onChange={(event) => setWidth(+event.currentTarget.value)}
        />
      </FormControl>
      <FormLabel>Colors</FormLabel>
      {tiles[0].colors.map((color, index) => {
        return (
          <FormControl key={index}>
            <Flex justifyContent="center">
              <Input marginY="10px" placeholder={color.name} onChange={handleChang(index)} />
              <Input margin="10px" placeholder={color.value} onChange={handleChangValue(index)} />
              <Box
                width="40px"
                height="40px"
                background={color.value}
                borderRadius="10px"
                margin="auto"
              ></Box>
            </Flex>
          </FormControl>
        );
      })}
      <Button type="submit" width="full" mt={4}>
        Save
      </Button>
    </form>
  );
};

export default test;
