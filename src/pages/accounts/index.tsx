import { useCallback, useEffect, useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useListUsersQuery } from "../../redux/api/usersAccountApi";
import _ from "lodash";
import DisplayDataTable from "@/components/DisplayDataTable";
import TableBadge from "@/components/DisplayDataTable/TableBadge";
import { createColumnHelper, SortingState } from "@tanstack/react-table";
import { LIMIT } from "@/constants/pagination";
import Error from "@/components/Error";

interface User {
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  googleId: string | undefined;
}

const Accounts = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: LIMIT[0],
  });
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [optionalQuery, setOptionalQuery] = useState(
    `&user_id=${searchValue}&email=${searchValue}&name=${searchValue}&sort=${sorting[0]?.id}&desc=${
      sorting[0]?.desc ? -1 : 1
    }`
  );
  useEffect(() => {
    setOptionalQuery(
      `&user_id=${searchValue}&email=${searchValue}&name=${searchValue}&sort=${
        sorting[0]?.id
      }&desc=${sorting[0]?.desc ? -1 : 1}`
    );
  }, [sorting]);
  useEffect(() => {
    setSearchLoading(true);
    handleSearch(searchValue, searchField);
  }, [searchValue]);
  useEffect(() => {
    if(searchValue) { setSearchLoading(true);
    handleSearch(searchValue, searchField);}
  }, [searchField]);
  const handleSearch = useCallback(
    _.debounce((searchValue, searchField) => {
      ["user_id", "email", "name"].includes(searchField)
        ? setOptionalQuery(`&${searchField}=${searchValue}`)
        : setOptionalQuery(`&user_id=${searchValue}&email=${searchValue}&name=${searchValue}`);
      setPagination({
        pageIndex: 0,
        pageSize: LIMIT[0],
      });
      setSearchLoading(false);
    }, 2000),
    []
  );
  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor("user_id", {
      header: "ACCOUNT ID",
    }),
    columnHelper.accessor("email", {
      header: "EMAIL",
    }),
    columnHelper.accessor("firstName", {
      header: "FIRST NAME",
    }),
    columnHelper.accessor("lastName", {
      header: "LAST NAME",
    }),
    columnHelper.accessor("googleId", {
      header: "ACCOUNT TYPE",
      cell: (item) => {
        return item.getValue() ? (
          <TableBadge colorScheme="red" text="Google"></TableBadge>
        ) : (
          <TableBadge colorScheme="green" text="Email"></TableBadge>
        );
      },
    }),
  ];
  const { data, isError, isSuccess } = useListUsersQuery({
    offset: pageIndex * pageSize,
    limit: pageSize,
    optionalQuery,
  });
  const userData = data
    ? data.data.map((item) => {
        return {
          user_id: item._id,
          email: item.email,
          firstName: item.firstName,
          lastName: item.lastName,
          googleId: item.googleId,
        };
      })
    : [];
  const tableSearch = {
    searchPlaceholder: "Search user info",
    searchFieldSelect: true,
    searchField: searchField,
    setSearchField: setSearchField,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    searchLoading: searchLoading,
    searchLoadingText: "Please wait while the user data is loading...",
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
            data={userData}
            pageIndex={pageIndex}
            pageSize={pageSize}
            setPagination={setPagination}
            sorting={sorting}
            setSorting={setSorting}
            totalCount={data.total}
            tableTitle="User"
            showTotalQuantity
            tableSearch={tableSearch}
          ></DisplayDataTable>
        </Box>
      )}
      {console.log(data)}
    </>
  );
};

export default Accounts;
