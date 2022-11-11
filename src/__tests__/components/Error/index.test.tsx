import { render, screen } from "@testing-library/react";
import Error from "@/components/Error";

describe("Error Component", () => {
  it("Should render TableBadge Component", () => {
    render(<Error errorTitle="test" errorDescription="test description" />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test description")).toBeInTheDocument();
  });
});
