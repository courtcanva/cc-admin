import AdminPage from "../../../pages/admin";
import renderWithMockedProvider from "../../utils";
import { screen } from "@testing-library/react";

describe("AdminPage", () => {
  it("should render the table header correctly", () => {
    renderWithMockedProvider(<AdminPage />);
    const tableHeader1 = screen.getByText(/ADMIN NAME/i);
    const tableHeader2 = screen.getByText(/EMAIL/i);
    const tableHeader3 = screen.getByText(/CREATED AT/i);
    const tableHeader4 = screen.getByText(/UPDATED AT/i);
    const tableHeader5 = screen.getByText(/PERMISSION/i);
    const tableHeader7 = screen.getByText(/OPERATION/i);
    const title = screen.getByText("Admin Accounts");

    expect(tableHeader1).toBeVisible();
    expect(tableHeader2).toBeVisible();
    expect(tableHeader3).toBeVisible();
    expect(tableHeader4).toBeVisible();
    expect(tableHeader5).toBeVisible();
    expect(tableHeader7).toBeVisible();
    expect(title).toBeVisible();
  });

  it("should render correct 'New'content", () => {
    renderWithMockedProvider(<AdminPage />);
    const newBtnText = screen.getByText("New");
    expect(newBtnText).toBeInTheDocument();
  });
});
