import { useEffect, useState } from "react";
import { api } from "@/utils/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, FormControl, FormLabel, Input, Flex, Box, Container } from "@chakra-ui/react";
interface ITile {
  _id: string;
  name: string;
  colors: { name: string; value: string }[];
  length: string;
  width: string;
  heights: string;
  createAt: string;
  updateAt: string;
}
interface IColor {
  name: string;
  value: string;
}
const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tiles, setTiles] = useState<ITile>();
  const [name, setName] = useState("");
  const [length, setLength] = useState(300);
  const [width, setWidth] = useState(300);
  const [color, setColor] = useState<IColor[]>();
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_API_TILES}/${id}`;
  useEffect(() => {
    api(apiUrl, { method: "get" }).then(({ data }) => {
      setTiles(data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      api(apiUrl, {
        method: "put",
        requestData: { ...tiles, color, length, width, name },
      });
      router.push("/tiles");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChang = (index: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const newArr: IColor[] = [...tiles!.colors];

    newArr[index].name = e.currentTarget.value;
    setColor(newArr);
  };

  const handleChangValue = (index: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const newArr: IColor[] = [...tiles!.colors];

    newArr[index].value = e.currentTarget.value;
    setColor(newArr);
  };
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Tile Name</FormLabel>
          <Input
            placeholder={tiles!.name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel marginTop="30px">Tile Length</FormLabel>
          <Input
            placeholder={tiles!.length}
            onChange={(event) => setLength(+event.currentTarget.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel marginTop="30px">Tile Width</FormLabel>
          <Input
            placeholder={tiles!.width}
            onChange={(event) => setWidth(+event.currentTarget.value)}
          />
        </FormControl>
        <FormLabel marginTop="30px">Colors</FormLabel>
        {tiles!.colors.map((color, index) => {
          return (
            <FormControl key={index}>
              <Flex justifyContent="center">
                <Input marginY="10px" placeholder={color.name} onChange={handleChang(index)} />
                <Input margin="10px" placeholder={color.value} onChange={handleChangValue(index)} />
                <Box
                  width="40px"
                  height="40px"
                  padding="22px"
                  background={color.value}
                  borderRadius="10px"
                  margin="auto"
                ></Box>
              </Flex>
            </FormControl>
          );
        })}
        <Flex>
          <Link href="/tiles">
            <Button width="full" mt={4} margin="20px">
              Cancel
            </Button>
          </Link>

          <Button type="submit" width="full" mt={4} margin="20px">
            Save
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
export default Edit;
