import { ReactNode, useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "@/components/SideBar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarExpand, setSidebarExpand] = useState(true);

  return (
    <>
      <Header />
      <Flex>
        <SideBar sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} />
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
