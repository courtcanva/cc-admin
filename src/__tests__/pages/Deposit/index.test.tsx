import Deposit from "@/components/Deposit";
import renderWithMockedProvider from "../../utils";

describe("deposit", () => {
  it("should render the table header correctly", () => {
    renderWithMockedProvider(<Deposit />);
  });
});
