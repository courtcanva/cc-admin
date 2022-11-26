import { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "../components/SideBar";
import { Box, Flex } from "@chakra-ui/react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarExpand, setSidebarExpand] = useState(true);

  return (
    <>
      <Header />
      <Flex>
        <Sidebar sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} />
        <Box
          as="main"
          flexGrow={1}
          marginLeft={sidebarExpand ? "240px" : "50px"}
          padding="20px 50px"
          transition="linear 0.4s"
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
export default Layout;
