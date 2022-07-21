import { render, screen, fireEvent } from "@testing-library/react";
import SideBar from "../../../components/SideBar";
import sidebarItemList from "@/components/SideBar/components/SideBarItem/sideBarItemList";
import renderWithMockedProvider from "../../utils";

describe("Sidebar component", () => {
  test("Each element in the sidebar should render the correct text");
  render(<SideBar />);
  const homeText = screen.getByText("Home");
  const accountsText = screen.getByText("Accounts");
  const tilesText = screen.getByText("Tiles");
  const courtsText = screen.getByText("Courts");

  expect(homeText).toBeInTheDocument();
  expect(accountsText).toBeInTheDocument();
  expect(tilesText).toBeInTheDocument();
  expect(courtsText).toBeInTheDocument();
});

it("When clicking icon button and closing button should be working", () => {
  renderWithMockedProvider(<SideBar />);

  sidebarItemList.map((item) => {
    const element = screen.getByText(item.title);

    fireEvent.click(element);
    const closingBtn = screen.getByRole("button");
    expect(closingBtn).toBeInTheDocument();

    fireEvent.click(closingBtn);
    expect(closingBtn).not.toBeInTheDocument();

    fireEvent.click(element);
    fireEvent.click(element);
    expect(closingBtn).not.toBeInTheDocument();
  });
});
