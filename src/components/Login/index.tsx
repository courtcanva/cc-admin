import React, { useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import DashBoardLogo from "@/assets/svg/dashboard-log.svg";

import { Box, Flex, Image, Text, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const isInvalid = !userPassword || !userEmail;

  const handleUserLogin = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("====================================");
    console.log("userEmail", userEmail);
    console.log("userPassword", userPassword);
    console.log("====================================");
  };

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
              <form onSubmit={handleUserLogin}>
                <FormControl>
                  <FormLabel htmlFor="email" fontWeight="600">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    size="md"
                    width="360px"
                    placeholder="Enter Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUserEmail(e.target.value.trim())
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="password" fontWeight="600" marginTop="25px">
                    Password
                  </FormLabel>
                  <Input
                    id="password"
                    type="password"
                    size="md"
                    width="360px"
                    placeholder="Enter Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUserPassword(e.target.value.trim())
                    }
                  />
                </FormControl>

                <Button
                  width="360px"
                  height="40px"
                  marginTop="25px"
                  marginBottom="100px"
                  background={isInvalid ? "#c5c5c6" : "white"}
                  border="1px solid"
                  borderColor={isInvalid ? "transparent" : "brand.secondary"}
                  _hover={{
                    background: "brand.secondary",
                    color: "white",
                  }}
                  _active={{
                    background: "button.active",
                  }}
                  type="submit"
                  disabled={isInvalid}
                >
                  Login in
                </Button>
              </form>
            </Flex>
          </Flex>

          <Image src="./login/login-image.png" zIndex="10" transform="translateX(-5px)" />
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default Login;
