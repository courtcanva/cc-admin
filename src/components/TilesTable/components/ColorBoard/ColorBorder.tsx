import { Flex, Box, Tooltip } from "@chakra-ui/react";
import shortid from "shortid";

interface IColor {
  name: string;
  value: string;
}

const ColorBoard = ({ colors }: any) => {
  return (
    <Flex wrap="wrap" h="150px" columnGap="18px" justifyContent="center" alignItems="center">
      {colors.map((color: IColor) => (
        <Tooltip key={shortid.generate()} label={color.name}>
          <Box key={color.name} bg={color.value} w="30px" h="30px" />
        </Tooltip>
      ))}
    </Flex>
  );
};
export default ColorBoard;
