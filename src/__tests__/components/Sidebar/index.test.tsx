import { render, screen } from "@testing-library/react";
import Sidebar from "../../../components/SideBar";
import renderWithMockedProvider from "../../utils";
describe("Sidebar", () => {
  const expandProps = {
    sidebarExpand: true,
    setSidebarExpand: jest.fn(),
  };
  const collapseProps = {
    sidebarExpand: false,
    setSidebarExpand: jest.fn(),
  };
  it("sidebar'width should be 240px", () => {
    renderWithMockedProvider(<Sidebar {...expandProps} />);
    expect(screen.getByRole("complementary")).toHaveStyle("width: 240px");
  });

  it("sidebar'width should be 50px", () => {
    renderWithMockedProvider(<Sidebar {...collapseProps} />);
    expect(screen.getByRole("complementary")).toHaveStyle("width: 50px");
  });
});
