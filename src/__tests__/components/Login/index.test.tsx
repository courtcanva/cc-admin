import { render, screen } from "@testing-library/react";
import Login from "@/components/Login/";

describe("Login", () => {
  it("should render Login", () => {
    render(<Login />);

    const loginText = screen.getByText(/Log in to CourtCanva Admin/i);
    expect(loginText).toBeInTheDocument();
  });
});
