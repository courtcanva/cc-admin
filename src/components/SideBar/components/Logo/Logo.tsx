import { Text, Flex } from "@chakra-ui/react";
import DashBoardLogo from "@/assets/svg/dashboard-log.svg";

const Logo = () => {
  return (
    <Flex paddingTop="20px">
      <DashBoardLogo />
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
