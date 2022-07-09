import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "@/components/Login";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const token = false;

  // if (!token) {
  //   return (
  //     <>
  //       <Header />
  //       <Login />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <Box as="main">
        <Container>{children}</Container>
        <Footer />
      </Box>
    </>
  );
};
export default Layout;
