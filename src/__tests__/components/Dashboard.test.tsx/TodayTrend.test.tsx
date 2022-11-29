import { render, screen } from "@testing-library/react";
import TodayTrend from "@/components/Dashboard/TodayTrend";

describe("Dashboard TodayTrend", () => {
  const prop = {
    todayTotalOrder: 1,
    orderGrowth: 2,
    todayTotalSales: 3,
    saleGrowth: 4,
    todayAddedUsers: 5,
    userGrowth: 6,
    todayAddedTemplates: 7,
    templatesGrowth: 8,
  };
  it("should render dashboard TodayTrend", () => {
    render(<TodayTrend {...prop} />);
    expect(screen.getByText("Today's trends")).toBeInTheDocument();
  });
});
