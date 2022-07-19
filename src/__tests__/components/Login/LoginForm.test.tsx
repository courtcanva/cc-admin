import { screen, render } from "@testing-library/react";
import LoginForm from "@/components/Login/LoginForm";
// import renderWithMockedProvider, { createMockRouter } from "../../utils";
// import { RouterContext } from "next/dist/shared/lib/router-context";

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

// renderWithMockedProvider(
//   <RouterContext.Provider value={createMockRouter({})}>
//     <LoginForm
//       loginStatus={function (arg0: boolean): boolean | void {
//         throw new Error("Function not implemented.");
//       }}
//     />
//   </RouterContext.Provider>
// );
