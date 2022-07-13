import { Flex, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

interface IColor {
  name: string;
  value: string;
}

type Props = {
  setColors: React.Dispatch<React.SetStateAction<any>>;
};

const AddTileColor: React.FC<Props> = ({ setColors }) => {
  const [color, setColor] = useState<IColor>({ name: "", value: "" });
  const addColorClick = () => {
    setColors((result: IColor[]) => [...result, color]);
    setColor({ name: "", value: "" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColor({
      ...color,
      [name]: value,
    });
  };
  return (
    <Flex justifyContent="center">
      <Input marginY="10px" name="name" value={color.name} onChange={handleChange}></Input>
      <Input margin="10px" name="value" value={color.value} onChange={handleChange}></Input>
      <Box
        width="40px"
        height="40px"
        padding="22px"
        background={color.value}
        borderRadius="10px"
        margin="auto"
      ></Box>
      <Button onClick={addColorClick} margin="10px">
        Add
      </Button>
    </Flex>
  );
};
export default AddTileColor;
