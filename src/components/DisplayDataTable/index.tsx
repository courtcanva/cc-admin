import { LIMIT } from "@/constants/pagination";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Search from "./Search";
import Loading from "@/components/Loading";
import InformationAlert from "../InformationAlert";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Center,
  Badge,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiChevronDown,
  HiChevronUp,
  HiPlus,
} from "react-icons/hi";

interface Props<Data extends object> {
  columns: ColumnDef<Data, any>[];
  data: Data[];
  pageIndex: number;
  pageSize: number;
  setPagination: Dispatch<
    SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
  totalCount: number;
  tableTitle?: string;
  showTotalQuantity?: boolean;
  tableSearch?: Search;
  createLink?: string;
}

interface Search {
  searchPlaceholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchLoading: boolean;
  searchLoadingText: string;
}

function DisplayDataTable<Data extends object>({
  columns,
  data,
  pageIndex,
  pageSize,
  setPagination,
  sorting,
  setSorting,
  totalCount,
  tableTitle,
  showTotalQuantity,
  tableSearch,
  createLink,
}: Props<Data>) {
  const router = useRouter();
  const table = useReactTable({
    data,
    columns,
    pageCount: totalCount ? Math.ceil(totalCount / pageSize) : 1,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    manualSorting: true,
    onSortingChange: setSorting,
  });

  return (
    <Flex
      flexDirection="column"
      height={tableSearch?.searchLoading || totalCount === 0 ? "80vh" : ""}
    >
      {/* Table title / Data total count */}
      <Flex alignItems="center">
        {tableTitle && (
          <Text
            marginRight="14px"
            fontSize="24px"
            fontWeight="700"
            color="#000000"
            data-testid="table-title"
          >
            {tableTitle}
          </Text>
        )}
        {showTotalQuantity && (
          <Badge
            padding="4px 12px"
            borderRadius="25px"
            backgroundColor="#2C4E8A"
            color="#FFFFFF"
            data-testid="total-count"
          >
            {totalCount}
          </Badge>
        )}
      </Flex>

      {/* Search / Filter Button / Create Button */}
      {(tableSearch || createLink) && (
        <Flex
          marginTop="16px"
          justifyContent={tableSearch !== undefined ? "space-between" : "flex-end"}
        >
          {tableSearch && (
            <Box width="fit-content" data-testid="table-search">
              <Search
                searchPlaceholder={tableSearch.searchPlaceholder}
                searchValue={tableSearch.searchValue as string}
                setSearchValue={tableSearch.setSearchValue as Dispatch<SetStateAction<string>>}
              ></Search>
            </Box>
          )}
          <Flex>
            {/* Todo: filter function */}
            {/* <Button
              leftIcon={<HiViewGridAdd />}
              backgroundColor="#2C4E8A"
              color="#FFFFFF"
              _hover={{
                backgroundColor: "#7088B1",
                color: "#F3F2F7",
              }}
            >
              Add Filter
            </Button> */}
            {createLink && (
              <Button
                leftIcon={<HiPlus />}
                marginLeft="10px"
                backgroundColor="#2C4E8A"
                color="#FFFFFF"
                _hover={{
                  backgroundColor: "#7088B1",
                  color: "#F3F2F7",
                }}
                onClick={() => {
                  router.push(createLink as string);
                }}
                data-testid="create-button"
              >
                Create
              </Button>
            )}
          </Flex>
        </Flex>
      )}

      {/* Table */}
      {tableSearch?.searchLoading ? (
        <Center flexGrow={1}>
          <Loading loadingText={tableSearch?.searchLoadingText}></Loading>
        </Center>
      ) : totalCount ? (
        <>
          <Table marginTop="24px" variant="striped">
            <Thead backgroundColor="#2C4E8A">
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        fontSize="12px"
                        color="#FFFFFF"
                        cursor={header.column.getCanSort() ? "pointer" : "default"}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Flex alignItems="center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          <Flex marginLeft="4px" boxSize="18px" alignItems="center">
                            {header.column.getIsSorted() &&
                              (header.column.getIsSorted() === "desc" ? (
                                <Icon as={HiChevronDown} width="100%" height="100%" />
                              ) : (
                                <Icon as={HiChevronUp} width="100%" height="100%" />
                              ))}
                          </Flex>
                        </Flex>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Td>
                    );
                  })}
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* Pagination */}
          <Flex marginTop="24px" justifyContent="space-between" alignItems="center">
            <Flex>
              <Tooltip label="First Page">
                <IconButton
                  marginRight="10px"
                  aria-label="First Page"
                  icon={<HiOutlineChevronDoubleLeft />}
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.setPageIndex(0)}
                  data-testid="first-page-button"
                />
              </Tooltip>
              <Tooltip label="Previous Page">
                <IconButton
                  aria-label="Previous Page"
                  icon={<HiOutlineChevronLeft />}
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.previousPage()}
                  data-testid="previous-button"
                />
              </Tooltip>
            </Flex>
            <Flex alignItems="center">
              <Text marginRight="20px">
                Page
                <Text fontWeight="700" as="span">
                  {` ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
                </Text>
              </Text>
              <Text marginRight="2px">Go to page:</Text>
              <NumberInput
                marginRight="20px"
                maxWidth="80px"
                min={1}
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                allowMouseWheel
                onChange={(e) => {
                  table.setPageIndex(/^[1-9]\d*$/.test(e) ? Number(e) - 1 : 0);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Select
                maxWidth="110px"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {LIMIT.map((item) => (
                  <option key={item} value={item}>
                    Show {item}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex>
              <Tooltip label="Next Page">
                <IconButton
                  marginRight="10px"
                  aria-label="Next Page"
                  icon={<HiOutlineChevronRight />}
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.nextPage()}
                  data-testid="next-button"
                />
              </Tooltip>
              <Tooltip label="Last Page">
                <IconButton
                  aria-label="Last Page"
                  icon={<HiOutlineChevronDoubleRight />}
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  data-testid="last-page-button"
                />
              </Tooltip>
            </Flex>
          </Flex>
        </>
      ) : (
        <Center flexGrow={1}>
          <InformationAlert informationText="No quotation data found"></InformationAlert>
        </Center>
      )}
    </Flex>
  );
}

export default DisplayDataTable;
