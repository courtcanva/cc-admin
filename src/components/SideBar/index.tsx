import { Dispatch, SetStateAction } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import SidebarItems from "./SidebarItems";
import { Flex, Box } from "@chakra-ui/react";

interface Props {
  sidebarExpand: boolean;
  setSidebarExpand: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarExpand, setSidebarExpand }: Props) => {
  return (
    <Flex
      as="aside"
      position="fixed"
      left="0"
      width={sidebarExpand ? "240px" : "50px"}
      height="100vh"
      paddingX={sidebarExpand ? "16px" : "6px"}
      paddingY="20px"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="#4A4A4A"
      transition="linear 0.4s"
    >
      <Box>
        <Logo sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} />
        <SidebarItems sidebarExpand={sidebarExpand} />
      </Box>
      <Profile sidebarExpand={sidebarExpand} />
    </Flex>
  );
};

export default Sidebar;
