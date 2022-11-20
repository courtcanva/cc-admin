import { Text, Flex, IconButton } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import useAuthRequest from "@/components/Login/helpers/useAuthRequest";

const Profile = () => {
  const { logoutRequest } = useAuthRequest();

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontSize="16px" fontWeight="500" color="#FFFFFF">
        Chui
      </Text>
      <IconButton aria-label="logout" width="32px" height="32px" onClick={() => logoutRequest()}>
        <MdOutlineLogout />
      </IconButton>
    </Flex>
  );
};

export default Profile;
