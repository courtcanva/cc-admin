import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import { Heading } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

const Home: NextPage = () => {
  return (
    <HeaderLayout>
      <Heading as="h1" size="xl" paddingLeft="326px">
        Welcome to CourtCanva
      </Heading>
    </HeaderLayout>
  );
};

export default Home;
