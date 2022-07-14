import React, { useReducer, useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import formReducer, { FormActionKind } from "./formReducer";
import userAuthRequest from "@/components/Login/helpers/authRequest";
import userTokenService from "@/components/Login/helpers/tokenService";

const initialFormState = {
  userEmail: "",
  userPassword: "",
};

const LoginForm = ({ loginStatus }: { loginStatus: (arg0: boolean) => boolean | void }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUserToken } = userTokenService();
  const { loginRequest } = userAuthRequest();

  const isInvalid = !state.userEmail || !state.userPassword;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoginFail(false);
    loginStatus(false);
    dispatch({
      type: FormActionKind.HANDLE_LOGIN_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  const handleUserLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoginFail(false);
    setIsLoading(true);
    const loginResponse = await loginRequest(state.userEmail, state.userPassword);

    if (loginResponse?.status === 403) {
      setIsLoginFail(true);
      loginStatus(true);
      setIsLoading(false);
      return;
    }

    const tokens: object = loginResponse.data;

    setUserToken(tokens);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleUserLogin}>
      <FormControl isInvalid={isLoginFail}>
        <FormLabel htmlFor="email" fontWeight="600">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          name="userEmail"
          size="md"
          width="360px"
          placeholder="Enter Email"
          onChange={handleTextChange}
        />
      </FormControl>

      <FormControl isInvalid={isLoginFail}>
        <FormLabel htmlFor="password" fontWeight="600" marginTop="25px">
          Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          name="userPassword"
          size="md"
          width="360px"
          placeholder="Enter Password"
          onChange={handleTextChange}
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
        isLoading={isLoading}
      >
        Login in
      </Button>
    </form>
  );
};

export default LoginForm;
