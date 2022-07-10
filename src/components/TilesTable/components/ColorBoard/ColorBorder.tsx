import { Flex, Box, Tooltip } from "@chakra-ui/react";
const ColorBoard = ({ colors }: any) => {
  return (
    <Flex wrap="wrap" h="150px" columnGap="18px" justifyContent="center" alignItems="center">
      {colors.map((color: any) => (
        <Tooltip label={color.name}>
          <Box key={color.name} bg={color.value} w="30px" h="30px" />
        </Tooltip>
      ))}
    </Flex>
  );
};
export default ColorBoard;
