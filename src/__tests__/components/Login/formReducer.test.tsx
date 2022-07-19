import formReducer from "@/components/Login/formReducer";
import LoginForm from "@/components/Login/LoginForm";
import { fireEvent, render } from "@testing-library/react";

it("should receive the correct form input value", () => {
  const setup = () => {
    const utils = render(<LoginForm loginStatus={(status: boolean): boolean | void => status} />);
    const input = utils.getByPlaceholderText(/Enter Email/i) as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };
  const { input } = setup();
  fireEvent.change(input, { target: { value: "john.doe@gmail.com" } });
  expect(input.value).toBe("john.doe@gmail.com");
});

it("should return init state", () => {
  const initialState = { userEmail: "", userPassword: "" };
  const updateAction = { type: null, field: "", payload: "" };
  const updatedState = formReducer(initialState, updateAction);

  expect(updatedState).toEqual(initialState);
});
