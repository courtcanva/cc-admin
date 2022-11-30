import React from "react";
import { screen } from "@testing-library/react";
import Layout from "../../layouts";
import Home from "../../pages";
import renderWithMockedProvider from "../utils";

describe("Layout", () => {
  it("main'width should be 240px", () => {
    const useStateMock: any = () => [true, jest.fn()];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    renderWithMockedProvider(
      <Layout>
        <Home />
      </Layout>
    );
    expect(screen.getByRole("main")).toHaveStyle("margin-left: 240px");
  });

  it("main'width should be 50px", () => {
    const useStateMock: any = () => [false, jest.fn()];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    renderWithMockedProvider(
      <Layout>
        <Home />
      </Layout>
    );
    expect(screen.getByRole("main")).toHaveStyle("margin-left: 50px");
  });
});
