import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderHeader from "../../../pages/orders/components/OrderHeader";

// each order blue bar
const OrderHeaderInfoMockData = {
  createdAt: "2022-11-12 11:00:00",
  _id: "636fbb07d8e97844f6905732",
  userId: "63624a518991ae3a2a678e8d",
};

describe("<OrderHeader />", () => {
  it("should render order Header component correctly", () => {
    renderWithMockedProvider(<OrderHeader {...OrderHeaderInfoMockData} />);
    expect(screen.getByText("Create Date: 2022-11-12 11:00:00")).toBeVisible();
    expect(screen.getByText("Order #: 636fbb07d8e97844f6905732")).toBeVisible();
    expect(screen.getByText("Account ID: 63624a518991ae3a2a678e8d")).toBeVisible();
  });
});
