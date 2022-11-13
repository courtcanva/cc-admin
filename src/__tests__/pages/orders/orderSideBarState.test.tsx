import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderSideBarState from "../../../pages/orders/components/OrderSideBarState";

const OrderstatusUnpaidMockData = {
  status: "unpaid",
};

const OrderstatusCompletedMockData = {
  status: "completed",
};

const OrderstatusProcessingMockData = {
  status: "processing",
};

const OrderstatusCancelledMockData = {
  status: "cancelled",
};

describe("<OrderSideBarState />", () => {
  it("should render unpaid text correctly", () => {
    renderWithMockedProvider(<OrderSideBarState {...OrderstatusUnpaidMockData} />);
    expect(screen.getByText("unpaid")).toBeVisible();
  });

  it("should render completed text correctly", () => {
    renderWithMockedProvider(<OrderSideBarState {...OrderstatusCompletedMockData} />);
    expect(screen.getByText("completed")).toBeVisible();
  });

  it("should render processing text correctly", () => {
    renderWithMockedProvider(<OrderSideBarState {...OrderstatusProcessingMockData} />);
    expect(screen.getByText("processing")).toBeVisible();
  });

  it("should render cancelled text cancelled", () => {
    renderWithMockedProvider(<OrderSideBarState {...OrderstatusCancelledMockData} />);
    expect(screen.getByText("cancelled")).toBeVisible();
  });
});
