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

  it("should render search button", () => {
    jest.spyOn(hooks, "useGetAllOrdersQuery").mockImplementation(() => ({
      data: [],
      isLoading: false,
      isFetching: false,
      isError: false,
      refetch: jest.fn(),
    }));
    renderWithMockedProvider(<Orders />);
    expect(screen.getByText("Search")).toBeVisible();
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

  // it("should render each order header correctly", () => {
  //   renderWithMockedProvider(<OrderPage />);
  //   const createDateText = screen.getByText(/Create Date/i);
  //   const orderNoText = screen.getByText(/Order #/i);
  //   const accountIDText = screen.getByText(/Account ID/i);

  //   expect(createDateText).toBeInTheDocument();
  //   expect(orderNoText).toBeInTheDocument();
  //   expect(accountIDText).toBeInTheDocument();
  // });

  // it("should render each order footer correctly", () => {
  //   renderWithMockedProvider(<OrderPage />);
  //   const updateDateText = screen.getByText(/Update time/i);
  //   const totalQuatationPriceText = screen.getByText(/Total Quatation Price/i);
  //   const depositeText = screen.getByText(/Deposite/i);

  //   expect(updateDateText).toBeInTheDocument();
  //   expect(totalQuatationPriceText).toBeInTheDocument();
  //   expect(depositeText).toBeInTheDocument();
  // });

  // it("should render each order item correctly", () => {
  //   renderWithMockedProvider(<OrderPage />);

  //   const designNameText = screen.getByText(/Design Name/i);
  //   const courtTypeText = screen.getByText(/Court Type/i);
  //   const quatationPriceText = screen.getByText(/Quatation Price/i);
  //   const quatationDetailsText = screen.getByText(/Quatation Details/i);
  //   const courtSizeText = screen.getByText(/Court Size/i);
  //   const consigneeNameText = screen.getByText(/Consignee Name/i);
  //   const consigneePhoneText = screen.getByText(/Consignee Phone/i);
  //   const consigneeEmailText = screen.getByText(/Consignee Email/i);
  //   const shippingAddressText = screen.getByText(/Shipping Address/i);

  //   expect(designNameText).toBeInTheDocument();
  //   expect(courtTypeText).toBeInTheDocument();
  //   expect(quatationPriceText).toBeInTheDocument();
  //   expect(quatationDetailsText).toBeInTheDocument();
  //   expect(courtSizeText).toBeInTheDocument();
  //   expect(consigneeNameText).toBeInTheDocument();
  //   expect(consigneePhoneText).toBeInTheDocument();
  //   expect(consigneeEmailText).toBeInTheDocument();
  //   expect(shippingAddressText).toBeInTheDocument();
  // });
});
