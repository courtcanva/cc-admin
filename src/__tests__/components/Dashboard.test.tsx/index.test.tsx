import renderWithMockedProvider from "../../utils";
import Dashboard from "@/components/Dashboard";

describe("Dashboard", () => {
  it("should render dashboard", () => {
    renderWithMockedProvider(<Dashboard />);
  });
});
