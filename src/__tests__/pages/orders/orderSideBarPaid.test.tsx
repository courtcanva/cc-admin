import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderSideBarPaid from "@/components/OrderComponents/OrderSideBarPaid";

const OrderSideBarPaidInfoMockData = {
  depositPaid: "1296.11",
};

describe("<OrderSideBarPaid />", () => {
  it("should render paid money correctly", () => {
    renderWithMockedProvider(<OrderSideBarPaid {...OrderSideBarPaidInfoMockData} />);
    expect(screen.getByText("1296.11")).toBeVisible();
  });
});
