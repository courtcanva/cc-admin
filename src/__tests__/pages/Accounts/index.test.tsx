import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import AccountPage from "../../../pages/accounts";

describe("AccountPage", () => {
  it("should render 'User Account' correctly", () => {
    renderWithMockedProvider(<AccountPage />);
    const userAccountText = screen.getByText(/User Account/i);
    expect(userAccountText).toBeInTheDocument();
  });
  it("should render 'Total Users' correctly", () => {
    renderWithMockedProvider(<AccountPage />);
    const totalUsersText = screen.getByText(/Total Users/i);
    expect(totalUsersText).toBeInTheDocument();
  });

  it("Each tableHead in User Account should render content correctly", () => {
    renderWithMockedProvider(<AccountPage />);

    const accountIdText = screen.getByText(/account id/i);
    const firstNameText = screen.getByText(/first name/i);
    const lastNameText = screen.getByText(/last name/i);
    const emailText = screen.getByText(/email/i);
    const accountTypeText = screen.getByText(/account type/i);

    expect(accountIdText).toBeInTheDocument();
    expect(firstNameText).toBeInTheDocument();
    expect(lastNameText).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
    expect(accountTypeText).toBeInTheDocument();
  });
});
