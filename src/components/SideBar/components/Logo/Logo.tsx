import { Text, Flex, Image } from "@chakra-ui/react";
const Logo = () => {
  return (
    <Flex paddingTop="20px">
      <Image boxSize="32px" src="/dashboard-log.png" />
      <Text
        m={2}
        as="span"
        color="fontcolor.primary"
        fontSize="md"
        fontWeight="bold"
        lineHeight="19px"
      >
        CourtCanva Dashboard
      </Text>
    </Flex>
  );
};

export default Logo;
