import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderItemFooter from "../../../components/OrderComponents/OrderItemFooter";

const OrderFooterInfoMockData = {
  updateTime: "2022-11-12 20:26:55",
  totalQuatation: "",
  depositRate: 0.02,
};

describe("<OrderItemFooter />", () => {
  it("should render order Footer component correctly", () => {
    renderWithMockedProvider(<OrderItemFooter totalQuotation={""} {...OrderFooterInfoMockData} />);
    expect(screen.getByText("2022-11-12 20:26:55")).toBeVisible();
    expect(screen.getByText("0.02")).toBeVisible();
  });
});
