import { screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import Orders from "../../../pages/orders/index";
import * as hooks from "../../../redux/api/ordersApi";

describe("OrderPage", () => {
  it("should render Orders title correctly", () => {
    jest.spyOn(hooks, "useGetAllOrdersQuery").mockImplementation(() => ({
      data: [],
      isLoading: false,
      isFetching: false,
      isError: false,
      refetch: jest.fn(),
    }));
    renderWithMockedProvider(<Orders />);
    expect(screen.getByText("Orders")).toBeVisible();
  });

  it("should render header correctly", () => {
    jest.spyOn(hooks, "useGetAllOrdersQuery").mockImplementation(() => ({
      data: [],
      isLoading: false,
      isFetching: false,
      isError: false,
      refetch: jest.fn(),
    }));
    renderWithMockedProvider(<Orders />);
    expect(screen.getByText("Orders Details")).toBeVisible();
    expect(screen.getByText("Shipping Information")).toBeVisible();
    expect(screen.getByText("Total Paid")).toBeVisible();
    expect(screen.getByText("Status")).toBeVisible();
  });
});
