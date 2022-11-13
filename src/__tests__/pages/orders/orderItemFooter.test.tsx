import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderItemFooter from "../../../pages/orders/components/OrderItemFooter";

const OrderFooterInfoMockData = {
  updateTime: "2022-11-12 20:26:55",
  totalQuatation: "13,030.60",
  depositeRate: 0.02,
};

describe("<OrderItemFooter />", () => {
  it("should render order Footer component correctly", () => {
    renderWithMockedProvider(<OrderItemFooter {...OrderFooterInfoMockData} />);
    expect(screen.getByText("2022-11-12 20:26:55")).toBeVisible();
  });
});
