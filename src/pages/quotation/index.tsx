import { LIMIT } from "@/constants/pagination";
import { useCallback, useEffect, useState } from "react";
import { createColumnHelper, SortingState } from "@tanstack/react-table";
import { useGetAllQuotationQuery } from "../../redux/api/quotationApi";
import { useLazyGetDepositQuery } from "../../redux/api/depositApi";
import _ from "lodash";
import formatCurrency from "@/utils/formatCurrency";
import { IDesign } from "@/interfaces/design";
import Error from "@/components/Error";
import DisplayDataTable from "@/components/DisplayDataTable";
import TableBadge from "@/components/DisplayDataTable/TableBadge";
import { Box, Center, HStack } from "@chakra-ui/react";

interface Quotation {
  user_id: string;
  quotationName: string;
  quotation: string;
  deposit: string;
  depositRate: number;
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

  const { data, isError, isSuccess } = useGetAllQuotationQuery({
    offset: pageIndex * pageSize,
    limit: pageSize,
    optionalQuery,
  });

  const [trigger, { data: depositData }] = useLazyGetDepositQuery();
  useEffect(() => {
    trigger();
  }, []);

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
      setPagination({
        pageIndex: 0,
        pageSize: LIMIT[0],
      });
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
      cell: (item) => {
        return formatCurrency(item.getValue());
      },
    }),
    columnHelper.accessor("depositRate", {
      header: "DEPOSIT RATE",
    }),
    columnHelper.accessor("deposit", {
      header: "DEPOSIT",
      cell: (item) => {
        return formatCurrency(item.getValue());
      },
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
              text={`L: ${item.getValue().courtSize.length / 1000}m W:${
                item.getValue().courtSize.width / 1000
              }m`}
            ></TableBadge>
          </HStack>
        );
      },
    }),
    columnHelper.accessor("isExpired", {
      header: "QUOTATION STATUS",
      cell: (item) => {
        return item.getValue() ? (
          <TableBadge colorScheme="red" text="Expired"></TableBadge>
        ) : (
          <TableBadge colorScheme="green" text="Available"></TableBadge>
        );
      },
    }),
  ];

  const quotationData = data
    ? data.data.map((item) => {
        return {
          user_id: item.user_id,
          quotationName: item.design.designName,
          quotation: item.quotation,
          depositRate: depositData?.depositRate,
          deposit: (Number(item.quotation) * depositData?.depositRate).toString(),
          design: item.design,
          isExpired: item.isExpired,
        };
      })
    : [];
  const tableSearch = {
    searchPlaceholder: "Search account ID",
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    searchLoading: searchLoading,
    searchLoadingText: "Please wait while the quotation data is loading...",
  };

  return (
    <>
      {isError && (
        <Center height="100vh">
          <Error
            errorTitle="Sorry, failed to get quotation data"
            errorDescription="Your request was not sent successfully, please try again or contact IT support."
          ></Error>
        </Center>
      )}
      {isSuccess && (
        <Box paddingTop="40px" paddingBottom="20px">
          <DisplayDataTable
            columns={columns}
            data={quotationData}
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
        </Box>
      )}
    </>
  );
};

export default Quotation;
