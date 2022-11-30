import { render, screen } from "@testing-library/react";
import CourtCategorySold from "@/components/Dashboard/CourtCategorySold";

describe("Dashboard CourtCategorySold", () => {
  const prop = {
    courtCategorySoldCountList: [
      {
        _id: "Medium Court",
        count: 6,
      },
    ],
  };
  it("should render dashboard CourtCategorySold", () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    render(<CourtCategorySold {...prop} />);
    expect(screen.getByText("Court Category Sold")).toBeInTheDocument();
  });
});
