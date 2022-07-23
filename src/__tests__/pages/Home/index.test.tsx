import React from "react";
import renderWithMockedProvider from "../../utils";
import { act, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "../../../pages";

describe("Home Page", () => {
  it("should render homepage success", () => {
    renderWithMockedProvider(<Home />);
    expect(screen.getByText("Welcome to CourtCanva")).toBeInTheDocument();
  });
});
