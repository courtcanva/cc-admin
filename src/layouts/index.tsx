import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "@/components/SideBar";
import Templates from "@/pages/templates";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <SideBar />
      <Box as="main" marginLeft="326px" paddingX="50px">
        {children}
      </Box> */}
      <Templates/>
    </>
  );
};
export default Layout;
