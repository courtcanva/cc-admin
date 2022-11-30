import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Logo from "../../../components/SideBar/Logo";
import renderWithMockedProvider from "../../utils";

describe("Sidebar Logo", () => {
  const props = {
    sidebarExpand: true,
    setSidebarExpand: jest.fn(),
  };

  it("Click sidebar expand icon should change the sidebar width", () => {
    renderWithMockedProvider(<Logo {...props} />);
    userEvent.click(screen.getByTestId("toggle-icon"));
    expect(props.setSidebarExpand).toBeCalled();
  });
});
