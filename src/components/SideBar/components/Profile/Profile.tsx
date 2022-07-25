import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import useAuthRequest from "@/components/Login/helpers/useAuthRequest";

const Profile = () => {
  const { logoutRequest } = useAuthRequest();

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
        <IconButton
          aria-label="logout"
          width="32px"
          height="32px"
          padding={2}
          onClick={() => logoutRequest()}
        >
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
