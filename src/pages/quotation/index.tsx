import { LIMIT } from "@/constants/pagination";
import { useCallback, useEffect, useState } from "react";
import { createColumnHelper, SortingState } from "@tanstack/react-table";
import { useGetAllQuotationQuery } from "../../redux/api/quotationApi";
import _ from "lodash";
import { IDesign } from "@/interfaces/design";
import Error from "@/components/Error";
import DisplayDataTable from "@/components/DisplayDataTable";
import TableBadge from "@/components/DisplayDataTable/TableBadge";
import { Box, Center, HStack } from "@chakra-ui/react";

interface Quotation {
  user_id: string;
  quotationName: string;
  quotation: string;
  design: IDesign;
  isExpired: boolean;
}

const Quotation = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: LIMIT[0],
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [optionalQuery, setOptionalQuery] = useState(`&user_id=${searchValue}`);

  useEffect(() => {
    setOptionalQuery(
      `&user_id=${searchValue}&sort=${sorting[0]?.id}&desc=${sorting[0]?.desc ? -1 : 1}`
    );
  }, [sorting]);

  useEffect(() => {
    setSearchLoading(true);
    handleSearch(searchValue);
  }, [searchValue]);

  const handleSearch = useCallback(
    _.debounce((searchValue) => {
      setOptionalQuery(`&user_id=${searchValue}`);
      setSearchLoading(false);
    }, 2000),
    []
  );

  const columnHelper = createColumnHelper<Quotation>();
  const columns = [
    columnHelper.accessor("user_id", {
      header: "ACCOUNT ID",
    }),
    columnHelper.accessor("quotationName", {
      header: "QUOTATION Name",
    }),
    columnHelper.accessor("quotation", {
      header: "QUOTATION",
      enableSorting: false,
    }),
    columnHelper.accessor("design", {
      header: "QUOTATION DETAIL",
      enableSorting: false,
      cell: (item) => {
        return (
          <HStack>
            <TableBadge colorScheme="orange" text={item.getValue().courtSize.name}></TableBadge>
            <TableBadge
              colorScheme="purple"
              text={item.getValue().courtSize.length + "*" + item.getValue().courtSize.width}
            ></TableBadge>
          </HStack>
        );
      },
    }),
    columnHelper.accessor("isExpired", {
      header: "QUOTATION STATUS",
      cell: (item) => {
        return item.getValue() ? (
          <TableBadge colorScheme="red" text="expired"></TableBadge>
        ) : (
          <TableBadge colorScheme="green" text="available"></TableBadge>
        );
      },
    }),
  ];

  const { data, isError, isSuccess } = useGetAllQuotationQuery({
    offset: pageIndex * pageSize,
    limit: pageSize,
    optionalQuery,
  });

  const quotationData = data?.data.map((item) => {
    return {
      ..._.omit(item, [
        "_id",
        "image",
        "quotationDetails",
        "isDeleted",
        "createdAt",
        "updatedAt",
        "__v",
      ]),
      quotationName: item.design.designName,
    };
  });

  const tableSearch = {
    searchPlaceholder: "Search account ID",
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    searchLoading: searchLoading,
    searchLoadingText: "Please wait while the quotation data is loading...",
  };

  return (
    <Box height="100%" paddingTop="40px" paddingBottom="20px">
      {isError && (
        <Center height="100%">
          <Error
            errorTitle="Sorry, failed to get quotation data"
            errorDescription="Your request was not sent successfully, please try again or contact IT support."
          ></Error>
        </Center>
      )}
      {isSuccess && (
        <DisplayDataTable
          columns={columns}
          data={quotationData as Quotation[]}
          pageIndex={pageIndex}
          pageSize={pageSize}
          setPagination={setPagination}
          sorting={sorting}
          setSorting={setSorting}
          totalCount={data.total}
          tableTitle="Quotation"
          showTotalQuantity
          tableSearch={tableSearch}
        ></DisplayDataTable>
      )}
    </Box>
  );
};

export default Quotation;
