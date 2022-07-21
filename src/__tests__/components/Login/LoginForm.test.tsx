import { screen, render } from "@testing-library/react";
import LoginForm from "@/components/Login/LoginForm";

describe("LoginForm", () => {
  it("should render the LoginForm", () => {
    render(<LoginForm loginStatus={(status: boolean): boolean | void => status} />);

    const emailText = screen.getByText(/Email/i);
    const passwordText = screen.getByText(/Password/i);
    const loginBtn = screen.getByText(/Login in/i);

    expect(emailText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });
});
