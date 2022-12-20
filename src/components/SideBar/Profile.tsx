import useAuthRequest from "@/components/Login/helpers/useAuthRequest";
import { Text, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { TbLogout } from "react-icons/tb";

interface Props {
  sidebarExpand: boolean;
}

const Profile = ({ sidebarExpand }: Props) => {
  const { logoutRequest } = useAuthRequest();
  const adminLoginResponseData = JSON.parse(localStorage.getItem("adminInfo") || "{}");

  return (
    <Flex
      paddingTop="20px"
      justifyContent={sidebarExpand ? "space-between" : "center"}
      alignItems="center"
      borderTop="1px solid #64656A"
    >
      {sidebarExpand && (
        <Text fontWeight="500" color="#FFFFFF">
          {adminLoginResponseData?.name}
        </Text>
      )}

      <Tooltip
        label="Logout"
        hasArrow
        placement="right"
        color="#FFFFFF"
        fontWeight="500"
        borderRadius="4px"
        boxShadow="0px 5.18221px 10.3644px rgba(0, 0, 0, 0.25)"
      >
        <IconButton aria-label="logout" fontSize="24px" onClick={() => logoutRequest()}>
          <TbLogout />
        </IconButton>
      </Tooltip>
    </Flex>
  );
};

export default Profile;
