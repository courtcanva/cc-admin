import { screen } from "@testing-library/react";
import Login from "@/components/Login/";
import renderWithMockedProvider from "../../utils";

describe("Login", () => {
  it("should render Login", () => {
    renderWithMockedProvider(<Login />);

    const loginText = screen.getByText(/Log in to CourtCanva Admin/i);
    expect(loginText).toBeInTheDocument();
  });
});
