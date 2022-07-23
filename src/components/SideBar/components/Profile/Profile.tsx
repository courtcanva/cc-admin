import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
const Profile = () => {
  return (
    <Box>
      <Text color="fontcolor.primary">PROFILE</Text>

      <Flex paddingTop="20px" color="fontcolor.primary">
        <IconButton aria-label="person" w="32px" h="32px" padding={2}>
          <BsFillFilePersonFill />
        </IconButton>
        <Text as="span" fontSize="sm" padding={2}>
          Chui
        </Text>
      </Flex>
      <Flex paddingBottom="20px" as="button" color="fontcolor.primary">
        <IconButton aria-label="logout" w="32px" h="32px" padding={2}>
          <MdOutlineLogout />
        </IconButton>
        <Text as="span" fontSize="sm" padding={2}>
          Logout
        </Text>
      </Flex>
    </Box>
  );
};

export default Profile;
