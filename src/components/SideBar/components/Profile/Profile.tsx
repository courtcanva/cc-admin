import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
const Profile = () => {
  return (
    <Box>
      <Text color="fontcolor.primary">PROFILE</Text>

      <Flex paddingTop="20px" color="fontcolor.primary">
        <Icon w="32px" h="32px" viewBox="0 0 20 22" paddingRight="5px">
          <BsFillFilePersonFill />
        </Icon>
        <Text as="span" fontSize="sm">
          Chui
        </Text>
      </Flex>
      <Flex paddingBottom="20px" as="button" color="fontcolor.primary">
        <Icon w="32px" h="32px" viewBox="0 0 20 22" paddingRight="5px">
          <MdOutlineLogout />
        </Icon>
        <Text fontSize="sm">Logout</Text>
      </Flex>
    </Box>
  );
};

export default Profile;
