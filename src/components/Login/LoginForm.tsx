import React, { useReducer } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import formReducer, { FormActionKind } from "./formReducer";

const initialFormState = {
  userEmail: "",
  userPassword: "",
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const isInvalid = !state.userEmail || !state.userPassword;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActionKind.HANDLE_LOGIN_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  const handleUserLogin = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("====================================");
    console.log("userEmail", state.userEmail);
    console.log("userPassword", state.userPassword);
    console.log("====================================");
  };

  return (
    <form onSubmit={handleUserLogin}>
      <FormControl>
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

      <FormControl>
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
      >
        Login in
      </Button>
    </form>
  );
};

export default LoginForm;
