import { fireEvent, screen } from "@testing-library/react";
import CourtsPage from "../../../pages/courts";
import renderWithMockedProvider from "../../utils";

describe("CourtsHomePage", () => {
  it("Each tableHead should render the correct content", () => {
    renderWithMockedProvider(<CourtsPage />);
    const nameText = screen.getByText(/name/i);
    const createdAtText = screen.getByText(/created at/i);
    const updatedAtText = screen.getByText(/updated at/i);
    const detailText = screen.getByText(/detail/i);
    const displayText = screen.getByText(/display/i);

    expect(nameText).toBeInTheDocument();
    expect(createdAtText).toBeInTheDocument();
    expect(updatedAtText).toBeInTheDocument();
    expect(displayText).toBeInTheDocument();
    expect(detailText).toBeInTheDocument();
  });

  it("should render correct 'New'content", () => {
    renderWithMockedProvider(<CourtsPage />);
    const newBtnText = screen.getByText("New");
    expect(newBtnText).toBeInTheDocument();
  });
});
