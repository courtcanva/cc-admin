import { render } from "@testing-library/react";
import renderWithMockedProvider from "../utils";
import Header from "../../layouts/Header";

describe("Header", () => {
  it("should render header success", () => {
    renderWithMockedProvider(<Header />);
  });
});
