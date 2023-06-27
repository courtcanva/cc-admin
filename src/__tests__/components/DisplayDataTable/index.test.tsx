import { createColumnHelper } from "@tanstack/react-table";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DisplayDataTable from "@/components/DisplayDataTable";

interface MockData {
  id: number;
  name: string;
}

describe("DisplayDataTable", () => {
  const columnHelper = createColumnHelper<MockData>();
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("name", {
      header: "Name",
    }),
  ];
  const data: MockData[] = [
    {
      id: 1,
      name: "David",
    },
    {
      id: 2,
      name: "Stephen",
    },
    {
      id: 3,
      name: "Patricia",
    },
  ];

  it("Should render the table title", () => {
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={0}
        pageSize={10}
        setPagination={jest.fn()}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
        tableTitle="User"
      />
    );

    expect(screen.getByTestId("table-title")).toBeInTheDocument();
    expect(screen.getByTestId("table-title")).toHaveTextContent("User");
  });

  it("Should render the total count", () => {
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={0}
        pageSize={10}
        setPagination={jest.fn()}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
        showTotalQuantity
        tableTitle="User"
      />
    );

    expect(screen.getByTestId("total-count")).toBeInTheDocument();
    expect(screen.getByTestId("total-count")).toHaveTextContent("3");
  });

  it("Should render search", () => {
    const tableSearch = {
      searchPlaceholder: "",
      searchFieldSelect: false,
      searchField: "",
      setSearchField: jest.fn(),
      searchValue: "",
      setSearchValue: jest.fn(),
      searchLoading: false,
      searchLoadingText: "",
      searchOptions: ["user_id", "email", "name"],
      searchOptionsText: ["By User ID", "By Email", "By Name"],
    };

    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={0}
        pageSize={10}
        setPagination={jest.fn()}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
        tableSearch={tableSearch}
      />
    );
    expect(screen.getByTestId("table-search")).toBeInTheDocument();
  });

  it("Click first page button should change the page index", () => {
    const mockSetPagination = jest.fn();
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={1}
        pageSize={1}
        setPagination={mockSetPagination}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
      />
    );
    userEvent.click(screen.getByTestId("first-page-button"));
    expect(mockSetPagination).toBeCalled();
  });

  it("Click previous button should change the page index", () => {
    const mockSetPagination = jest.fn();
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={1}
        pageSize={1}
        setPagination={mockSetPagination}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
      />
    );
    userEvent.click(screen.getByTestId("previous-button"));
    expect(mockSetPagination).toBeCalled();
  });

  it("Should render page size list", () => {
    const mockSetPagination = jest.fn();
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={1}
        pageSize={1}
        setPagination={mockSetPagination}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
      />
    );
    expect(screen.getAllByRole("option").length).toBe(5);
    const option: HTMLOptionElement = screen.getByRole("option", { name: "Show 10" });
    expect(option.selected).toBe(true);
  });

  it("Click next button should change the page index", () => {
    const mockSetPagination = jest.fn();
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={1}
        pageSize={1}
        setPagination={mockSetPagination}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
      />
    );
    userEvent.click(screen.getByTestId("next-button"));
    expect(mockSetPagination).toBeCalled();
  });

  it("Click last page button should change the page index", () => {
    const mockSetPagination = jest.fn();
    render(
      <DisplayDataTable
        columns={columns}
        data={data}
        pageIndex={1}
        pageSize={1}
        setPagination={mockSetPagination}
        sorting={[]}
        setSorting={jest.fn()}
        totalCount={data.length}
      />
    );
    userEvent.click(screen.getByTestId("last-page-button"));
    expect(mockSetPagination).toBeCalled();
  });
});
