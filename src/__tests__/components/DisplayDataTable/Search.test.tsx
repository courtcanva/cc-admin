import { render, screen } from "@testing-library/react";
import Search from "@/components/DisplayDataTable/Search";
import userEvent from "@testing-library/user-event";

describe("Search Component", () => {
  it("User can type search text in search input box", () => {
    const mockSearch = jest.fn();
    render(<Search searchPlaceholder="" searchValue="" setSearchValue={mockSearch} />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    userEvent.type(screen.getByTestId("search-input"), "test");
    expect(mockSearch).toBeCalled();
  });

  it("User can click remove icon to remove search text", () => {
    const mockSearch = jest.fn();
    render(<Search searchPlaceholder="" searchValue="test" setSearchValue={mockSearch} />);

    expect(screen.getByTestId("remove-icon")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("remove-icon"));
    expect(mockSearch).toBeCalled();
  });
});
