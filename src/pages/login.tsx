import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import Login from "@/components/Login";

const LoginPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Login />
    </HeaderLayout>
  );
};

export default LoginPage;
