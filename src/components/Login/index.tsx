import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import DashBoardLogo from "@/assets/svg/dashboard-log.svg";
import LoginForm from "./LoginForm";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        background="#114458"
      >
        <Flex justifyContent="center" alignItems="center" position="relative">
          <Box
            width="1280px"
            height="710px"
            background="background.secondary"
            position="absolute"
            transform="rotate(-3deg)"
          />

          <Flex
            width="629px"
            height="682px"
            flexDir="column"
            alignItems="center"
            justifyContent="space-around"
            background="white"
            zIndex="10"
          >
            <Flex flexDir="column" alignItems="center" marginTop="50px">
              <DashBoardLogo />
              <Text marginTop="10px" color="brand.secondary">
                CourtCanva
              </Text>
            </Flex>

            <Flex flexDir="column" alignItems="center">
              <Text fontSize="xl" fontWeight="700">
                Login in to CourtCanva Admin
              </Text>
              <Text>Control Panel login</Text>
            </Flex>

            <Flex>
              <LoginForm />
            </Flex>
          </Flex>

          <Image src="./login/login-image.png" zIndex="10" transform="translateX(-5px)" />
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default Login;
