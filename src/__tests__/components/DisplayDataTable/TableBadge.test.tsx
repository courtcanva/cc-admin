import { render, screen } from "@testing-library/react";
import TableBadge from "@/components/DisplayDataTable/TableBadge";

describe("TableBadge Component", () => {
  it("Should render TableBadge Component", () => {
    render(<TableBadge colorScheme="red" text="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
