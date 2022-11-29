import { render, screen } from "@testing-library/react";
import SalesAndOrderVolume from "@/components/Dashboard/SalesAndOrderVolume";

describe("Dashboard SalesAndOrderVolume", () => {
  const prop = {
    lastSevenDaysTotalOrderAndSales: [
      {
        _id: 24,
        orderCount: 3,
        amountTotal: 392835,
      },
    ],
  };
  it("should render dashboard SalesAndOrderVolume", () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    render(<SalesAndOrderVolume {...prop} />);
    expect(screen.getByText("Last 7 days Sales / Orders Volume")).toBeInTheDocument();
  });
});
