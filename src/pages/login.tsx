import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import Login from "@/components/Login";
import { Box } from "@chakra-ui/react";

const LoginPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Box as="main">
        <Login />
      </Box>
    </HeaderLayout>
  );
};

export default LoginPage;
