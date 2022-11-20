import { Text, Flex, Image } from "@chakra-ui/react";
const Logo = () => {
  return (
    <Flex width="100%" justifyContent="space-between" alignItems="center">
      <Image src="/dashboard-logo-192x192.png" boxSize="48px" />
      <Text color="#FFFFFF" fontSize="24px">
        CourtCanva
      </Text>
    </Flex>
  );
};

export default Logo;
