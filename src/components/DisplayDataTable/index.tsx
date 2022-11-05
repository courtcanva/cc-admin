import { LIMIT } from "@/constants/pagination";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Tooltip,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { useState, useMemo, useEffect } from "react";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

interface Props<Data extends object> {
  tableTitle: string;
  columns: ColumnDef<Data, any>[];
  data: Data[];
  fetchData: any;
  pageIndex: number;
  pageSize: number;
  // showTotalQuantity: boolean;
}

function DisplayDataTable<Data extends object>({
  tableTitle,
  columns,
  data,
  fetchData,
  pageIndex,
  pageSize,
}: Props<Data>) {
  // const [data, setData] = useState<Data[]>();
  // const pagination = useMemo(() => {
  //   setData(fetchData({ offset: pageIndex * pageSize, limit: pageSize }));
  //   return {
  //     pageIndex,
  //     pageSize,
  //   };
  // }, [pageIndex, pageSize]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  // const dataQuery = useQuery(["data", fetchDataOptions], () => fetchData(fetchDataOptions), {
  //   keepPreviousData: true,
  // });

  const table = useReactTable({
    data,
    columns,
    pageCount: 2,
    state: {
      pagination,
    },
    // onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <>
      <Flex paddingTop="40px" paddingBottom="20px" flexDirection="column">
        <Text fontSize="24px" fontWeight="700" color="#000000">
          {tableTitle}
        </Text>
        <Table marginTop="24px">
          <Thead backgroundColor="#f5f5f5">
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  // const meta: any = header.column.columnDef.meta;
                  return (
                    <Th
                      key={header.id}
                      color="#747474"
                      fontSize="12px"
                      // onClick={header.column.getToggleSortingHandler()}
                      // isNumeric={meta?.isNumeric}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}

                      {/* <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span> */}
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
                  // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                  const meta: any = cell.column.columnDef.meta;
                  return (
                    <Td key={cell.id} isNumeric={meta?.isNumeric} borderBottomColor="#D9D9D9">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent="space-between" m={4} alignItems="center">
          <Flex>
            <Tooltip label="First Page">
              <IconButton
                aria-label="First Page"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                icon={<HiOutlineChevronDoubleLeft />}
                mr={4}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                aria-label="Previous Page"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                icon={<HiOutlineChevronLeft />}
              />
            </Tooltip>
          </Flex>
          <Flex alignItems="center">
            <Text mr={8}>
              Page{" "}
              <Text fontWeight="700" as="span">
                {table.getState().pagination.pageIndex + 1} of{" "}
              </Text>
              <Text fontWeight="700" as="span">
                {table.getPageCount()}
              </Text>
            </Text>
            <Text>Go to page:</Text>{" "}
            <NumberInput
              ml={2}
              mr={8}
              w={28}
              min={1}
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              // onChange={(e) => {
              //   const page = e.target.value ? Number(e.target.value) - 1 : 0;
              //   table.setPageIndex(page);
              // }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Select
              w={32}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {LIMIT.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                aria-label="Next Page"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                icon={<HiOutlineChevronRight />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                aria-label="Last Page"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                icon={<HiOutlineChevronDoubleRight />}
                ml={4}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default DisplayDataTable;
