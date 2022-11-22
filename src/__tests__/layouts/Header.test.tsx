import { render } from "@testing-library/react";
import Header from "../../layouts/Header";

describe("Header", () => {
  it("should render header success", () => {
    render(<Header />);
  });
});
