import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "@/components/Login";
import { useStoreSelector } from "@/store/hooks";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userAccessToken = useStoreSelector((state) => state.userToken.accessToken);

  return !userAccessToken ? (
    <>
      <Header />
      <Login />
    </>
  ) : (
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
