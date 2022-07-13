import { ReactNode, useEffect, useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "@/components/Login";
import { useStoreSelector } from "@/store/hooks";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userAccessToken = useStoreSelector((state) => state.userToken.accessToken);
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(window.localStorage.getItem("userToken"));
    }
  }, [userAccessToken]);

  return !token ? (
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
