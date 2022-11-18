import Deposit from "@/components/Deposit";
import renderWithMockedProvider from "../../utils";
import { screen } from "@testing-library/react";

describe("deposit", () => {
  it("should render the table header correctly", () => {
    renderWithMockedProvider(<Deposit />);
    const tableHeader1 = screen.getByText(/DEPOSIT RATE/i);
    const tableHeader2 = screen.getByText(/UPDATED AT/i);
    const tableHeader3 = screen.getByText(/OPERATION/i);
    const title = screen.getByText("Deposit");

    expect(tableHeader1).toBeVisible();
    expect(tableHeader2).toBeVisible();
    expect(tableHeader3).toBeVisible();
    expect(title).toBeVisible();
  });
});
