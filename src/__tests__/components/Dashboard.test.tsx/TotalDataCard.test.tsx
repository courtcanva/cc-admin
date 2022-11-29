import { render, screen } from "@testing-library/react";
import TotalDataCard from "@/components/Dashboard/TotalDataCard";
import { HiOutlineShoppingCart } from "react-icons/hi";

describe("Dashboard TotalDataCard", () => {
  const prop = {
    icon: HiOutlineShoppingCart,
    background: "linear-gradient(98.86deg, #6BAAFC 0%, #305FEC 100%)",
    totalCardItems: [
      {
        title: "Total Sales",
        value: 12,
      },
      { title: "Courts Sold", value: 21 },
    ],
  };
  it("should render dashboard TotalDataCard", () => {
    render(<TotalDataCard {...prop} />);
    expect(screen.getByTestId("total-data-card-container")).toHaveStyle(
      "background: linear-gradient(98.86deg, #6BAAFC 0%, #305FEC 100%)"
    );
  });
});
