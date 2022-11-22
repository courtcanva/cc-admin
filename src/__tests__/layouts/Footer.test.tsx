import renderWithMockedProvider from "../utils";
import { screen } from "@testing-library/react";
import Footer, { FooterContent } from "../../layouts/Footer";

describe("Footer", () => {
  it("should render footer success", () => {
    renderWithMockedProvider(<Footer />);
    expect(screen.getByText(FooterContent)).toBeInTheDocument();
  });
});
