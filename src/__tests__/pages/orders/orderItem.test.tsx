import { screen, within } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import OrderItem from "@/components/OrderComponents/OrderItem";

// has payment information
const OrderDetailwithPaymentInfoMockData = {
  image: "http://image.com",
  designName: "shawn",
  courtType: "Basketball",
  quotation: "9000.00",
  quotationDetials: [{ color: "red", quantity: 300 }],
  length: 10000,
  width: 7000,
  courtName: "Medium Court",
  consigneeName: "wszwsz111",
  consigneePhone: "+61420369963",
  consigneeEmail: "shawn.wang@newaim.com.au",
  shippingAddress: "12 Ashford Avenue Milperra 2214",
};

// no payment information
const OrderDetailNoPaymentInfoMockData = {
  image: "http://image.com",
  designName: "shawn",
  courtType: "Basketball",
  quotation: "9000.00",
  quotationDetials: [{ color: "red", quantity: 300 }],
  length: 10000,
  width: 7000,
  courtName: "Medium Court",
};

describe("<OrderItem />", () => {
  it("should render order item component correctly", () => {
    renderWithMockedProvider(
      <OrderItem quotationDetails={[]} {...OrderDetailwithPaymentInfoMockData} />
    );
    expect(screen.getByText("shawn")).toBeVisible();
    expect(screen.getByText("Basketball")).toBeVisible();
    expect(screen.getByText("A$9,000.00")).toBeVisible();
    expect(screen.getByText(`${10000}(L) * ${7000}(W) Medium Court`)).toBeVisible();
    expect(screen.getByText("wszwsz111")).toBeVisible();
    expect(screen.getByText("+61420369963")).toBeVisible();
    expect(screen.getByText("shawn.wang@newaim.com.au")).toBeVisible();
    expect(screen.getByText("12 Ashford Avenue Milperra 2214")).toBeVisible();
  });

  it("should render order item component correctly without shipping information", () => {
    renderWithMockedProvider(
      <OrderItem quotationDetails={[]} {...OrderDetailNoPaymentInfoMockData} />
    );
    expect(screen.getByText("shawn")).toBeVisible();
    expect(screen.getByText("Basketball")).toBeVisible();
    expect(screen.getByText("A$9,000.00")).toBeVisible();
    expect(screen.getByText(`${10000}(L) * ${7000}(W) Medium Court`)).toBeVisible();
    expect(within(screen.getByTestId("consignee-name")).getByText("N/A")).toBeVisible();
    expect(within(screen.getByTestId("consignee-email")).getByText("N/A")).toBeVisible();
    expect(within(screen.getByTestId("consignee-phone")).getByText("N/A")).toBeVisible();
    expect(within(screen.getByTestId("shipping-address")).getByText("N/A")).toBeVisible();
  });
});
