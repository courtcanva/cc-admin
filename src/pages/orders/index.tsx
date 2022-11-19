import { useState, useCallback, useEffect } from "react";
import { Heading, InputGroup, Input, InputLeftElement, Flex, Box, Center } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetAllOrdersQuery } from "../../redux/api/ordersApi";
import OrderContainer from "@/components/OrderComponents/OrderContainer";
import OrderStatusDropdownFilter from "@/components/OrderComponents/OrderStatusDropdownFilter";
import PaginationButton from "@/components/PaginationButton.tsx";
import { LIMIT, OFFSET } from "@/constants/orderPagePaginationData";
import { IOrder } from "@/interfaces/orderData";
import { FilterObjectType } from "@/components/OrderComponents/OrderStatusDropdownFilter";
import _ from "lodash";
import Error from "@/components/Error/index";
import getFilterQueryString from "./utils/getFilterQueryString";
import Loading from "@/components/Loading";

const Orders = () => {
  // pagination attributes
  const [page, setPage] = useState<number>(1);
  const [offset, setOffSet] = useState<number>(OFFSET);
  const limit = LIMIT;
  // this is for store user_id
  const [searchQuery, setSearchQuery] = useState<string>("");
  // this is for store status filter
  const [optionalQuery, setOptionalQuery] = useState<string>("");
  // get data from back-end by using toolkits query
  const {
    data: orders,
    isLoading,
    isFetching,
    isError,
  } = useGetAllOrdersQuery({ limit, offset, optionalQuery, searchQuery });

  // this is for status filter check box use
  const [filterStatus, setFilterStatus] = useState<FilterObjectType>({});

  // calculate total page for pagination use, should move to the backend in the future
  const totalPages = orders?.total == 0 ? 1 : Math.ceil(orders?.total / limit);

  // use util method to get optionalQuery
  const filterStatusQuery = getFilterQueryString(filterStatus);

  useEffect(() => {
    if (!filterStatusQuery) {
      setOptionalQuery(`status=''`);
    } else {
      setOptionalQuery(filterStatusQuery);
    }
  }, [filterStatusQuery]);

  const handleSearch = useCallback(
    _.debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(`&user_id=${e.target.value}`),
      800
    ),
    []
  );

  // handle order status filter value
  const handleValueChange = useCallback(
    (value: FilterObjectType) => setFilterStatus(value),
    [setFilterStatus]
  );

  if (isFetching && !orders) return null;

  return (
    <>
      {isLoading && <Loading loadingText="Loading" />}
      {isError && (
        <Center height="100vh">
          <Error
            errorTitle="Sorry, failed to get orders data"
            errorDescription="Your request was not sent successfully, please try again or contact IT support."
          ></Error>
        </Center>
      )}
      <Flex flexDirection="column">
        <Heading marginY="50px">Orders</Heading>
        {/* Search bar */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="#3C3C3C" />
          </InputLeftElement>
          <Input
            placeholder="Search user ID ..."
            _placeholder={{ color: "D9D9D9" }}
            height="40px"
            width="200px"
            fontSize="12px"
            aria-label="search-input"
            onChange={handleSearch}
          />
        </InputGroup>

        {/* Page Header */}
        <Flex
          backgroundColor="#F5F5F5"
          marginY="12px"
          textAlign="center"
          height="42.5px"
          alignItems="center"
        >
          <Heading fontSize="14px" color="#1A202C" flex="4.8">
            Orders Details
          </Heading>
          <Heading fontSize="14px" color="#1A202C" flex="3.1">
            Shipping Information
          </Heading>
          <Heading fontSize="14px" color="#1A202C" flex="1.0">
            Total Paid
          </Heading>
          <Heading
            fontSize="14px"
            color="#1A202C"
            flex="1.0"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap="5px"
          >
            Status
            <OrderStatusDropdownFilter handleValueChange={handleValueChange} />
          </Heading>
        </Flex>
        {(orders.data || []).map((order: IOrder) => (
          <OrderContainer order={order} key={order._id} />
        ))}
        {/* pagination button */}
        <Box marginBottom="20px">
          <PaginationButton
            setOffSet={setOffSet}
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Orders;
