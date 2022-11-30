import { screen } from "@testing-library/react";
import LoginForm from "@/components/Login/LoginForm";
import renderWithMockedProvider from "../../utils";

describe("LoginForm", () => {
  it("should render the LoginForm", () => {
    renderWithMockedProvider(
      <LoginForm loginStatus={(status: boolean): boolean | void => status} />
    );

    const emailText = screen.getByText(/Email/i);
    const passwordText = screen.getByText(/Password/i);
    const loginBtn = screen.getByText(/Login in/i);

    expect(emailText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });
});
