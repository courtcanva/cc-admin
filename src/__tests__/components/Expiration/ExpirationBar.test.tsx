import ExpirationBar from "@/components/Expiration/ExpirationBar";
import renderWithMockedProvider from "../../utils";
import { screen } from "@testing-library/react";

const MockExpirationBar = () => {
    return (
      <>
        <ExpirationBar />
      </>
    );
  };
  
  describe("ExpirationBar", () => {
    it("should show table head texts correctly", () => {
        renderWithMockedProvider(<MockExpirationBar />);
      const tableHead1 = screen.getByText("Expiration Day");
      const tableHead2 = screen.getByText("Updated At");
      const tableHead3 = screen.getByText("Operation");
      expect(tableHead1).toBeVisible();
      expect(tableHead2).toBeVisible();
      expect(tableHead3).toBeVisible();
    });
    it("should have operation icon", () => {
        renderWithMockedProvider(<MockExpirationBar />);
      const operation = screen.getByTestId("operationButton");
      expect(operation).toBeInTheDocument();
    });
  });

