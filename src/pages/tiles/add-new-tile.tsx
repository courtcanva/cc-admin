import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "@/utils/axios";
import Link from "next/link";
import { Button, FormControl, FormLabel, Input, Flex, Container, Box } from "@chakra-ui/react";
import AddTileColor from "@/components/AddTileColor";

interface IColor {
  name: string;
  value: string;
}

const AddNewTile = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [length, setLength] = useState(300);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(0);
  const [colors, setColors] = useState<any>([]);
  console.log(colors);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      api(process.env.NEXT_PUBLIC_API_TILES as string, {
        method: "post",
        requestData: { name, length, height, colors, width },
      });
      router.push("/tiles");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Tile Name</FormLabel>
          <Input onChange={(event) => setName(event.currentTarget.value)} />
        </FormControl>
        <FormControl>
          <FormLabel marginTop="30px">Tile Length</FormLabel>
          <Input onChange={(event) => setLength(+event.currentTarget.value)} />
        </FormControl>
        <FormControl>
          <FormLabel marginTop="30px">Tile Width</FormLabel>
          <Input onChange={(event) => setWidth(+event.currentTarget.value)} />
        </FormControl>
        <FormControl>
          <FormLabel marginTop="30px">Tile Height</FormLabel>
          <Input onChange={(event) => setHeight(+event.currentTarget.value)} />
        </FormControl>
        <FormLabel marginTop="30px">Colors</FormLabel>
        <AddTileColor setColors={setColors} />
        <Box>
          {colors.map((color: any) => {
            return (
              <Flex key={color.name} justifyContent="center">
                <Input marginY="10px" value={color.name} readOnly />
                <Input margin="10px" value={color.value} readOnly />
                <Box
                  width="40px"
                  height="40px"
                  padding="22px"
                  background={color.value}
                  borderRadius="10px"
                  margin="auto"
                ></Box>
              </Flex>
            );
          })}
        </Box>
        <Flex>
          <Link href="/tiles">
            <Button width="full" marginTop={4} margin="20px">
              Cancel
            </Button>
          </Link>
          <Button type="submit" width="full" marginTop={4} margin="20px">
            Save
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
export default AddNewTile;
