import { useState, useMemo, useCallback } from "react";
import { Heading, InputGroup, Input, InputLeftElement, Flex, Box } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetAllOrdersQuery } from "../../redux/api/ordersApi";
import OrderContainer from "./components/OrderContainer";
import OrderStatusDropdownFilter from "./components/OrderStatusDropdownFilter";
import PaginationButton from "@/components/PaginationButton.tsx";
import { LIMIT, OFFSET } from "@/constants/paginationData";
import { FilterType } from "./components/OrderStatusDropdownFilter";
import { IOrder } from "@/interfaces/orderData";
import _ from "lodash";

const Orders = () => {
  const [page, setPage] = useState<number>(1);
  const [offset, setOffSet] = useState<number>(OFFSET);
  const limit = LIMIT;
  const { data: orders, isLoading, isFetching, isError } = useGetAllOrdersQuery({ limit, offset });
  const [filterdOrders, setFilterdOrders] = useState<IOrder>();
  const [filterStatus, setFilterStatus] = useState<FilterType>();

  const totalPages = Math.ceil((orders?.total || []) / limit);

  // deboubce set search bar value
  const debouncedChangeHandler = useMemo(
    () =>
      _.debounce((userInput) => {
        const result = (orders?.data || []).filter(
          (order: IOrder) =>
            order._id.toLowerCase().includes(userInput.toLowerCase()) ||
            order.user_id.toLowerCase().includes(userInput.toLowerCase())
        );
        setFilterdOrders(result);
      }, 500),
    []
  );

  // handle search bar value
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedChangeHandler(e.target.value || "");
  }, []);

  // handle order status filter value
  const handleValueChange = useCallback(
    (value: FilterType) => {
      setFilterStatus(value);
    },
    [setFilterStatus]
  );

  if (isFetching && !orders) return null;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Orders</Heading>
      {/* Search bar */}
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color="#3C3C3C" />
        </InputLeftElement>
        <Input
          placeholder="Search order ID or user ID ..."
          _placeholder={{ color: "D9D9D9" }}
          height="40px"
          width="200px"
          fontSize="12px"
          aria-label="search-input"
          onChange={handleSearchChange}
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
        <Heading fontSize="14px" fontWeight="700" color="#1A202C" flex="4.8">
          Orders Details
        </Heading>
        <Heading fontSize="14px" fontWeight="700" color="#1A202C" flex="3.1">
          Shipping Information
        </Heading>
        <Heading fontSize="14px" fontWeight="700" color="#1A202C" flex="1.0">
          Total Paid
        </Heading>
        <Heading
          fontSize="14px"
          fontWeight="700"
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
      {/* search orderID and user ID filter */}
      {(filterdOrders || orders.data || [])
        // order status filter
        .filter((order: IOrder) => {
          if (!filterStatus) return true;
          return (
            (filterStatus.isUnpaid && order.status == "unpaid") ||
            (filterStatus.isProcessing &&
              !(order.status == "unpaid") &&
              !(order.status == "completed") &&
              !(order.status == "cancelled")) ||
            (filterStatus.isCompleted &&
              !(order.status == "unpaid") &&
              !(order.status == "processing") &&
              !(order.status == "cancelled")) ||
            (filterStatus.isCancelled &&
              !(order.status == "unpaid") &&
              !(order.status == "completed") &&
              !(order.status == "processing"))
          );
        })
        // render each item
        .map((order: IOrder) => (
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
  );
};

export default Orders;
