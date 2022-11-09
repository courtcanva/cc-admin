import { useState } from "react";
import { Heading, InputGroup, Input, Button, Flex, Box } from "@chakra-ui/react";
import { useGetAllOrdersQuery } from "../../redux/api/ordersApi";
import OrderContainer from "./components/OrderContainer";
import OrderStatusDropdownFilter from "./components/OrderStatusDropdownFilter";
import PaginationButton from "@/components/PaginationButton.tsx";
import { LIMIT, OFFSET } from "@/constants/paginationData";
import { FilterType } from "./components/OrderStatusDropdownFilter";
import { IOrder } from "@/interfaces/orderData";

const Orders = () => {
  const [page, setPage] = useState<number>(1);
  const [offset, setOffSet] = useState<number>(OFFSET);
  const limit = LIMIT;
  const { data: orders, isLoading, isFetching, isError } = useGetAllOrdersQuery({ limit, offset });
  const { data: ordersLength } = useGetAllOrdersQuery({});
  const [searchField, setSearchField] = useState<string>("");
  const [filterdOrders, setFilterdOrders] = useState<IOrder>();
  const [filterStatus, setFilterStatus] = useState<FilterType>();

  const totalPages = Math.ceil((ordersLength || []).length / limit);

  if (isFetching && !orders) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const handleSearchClick = (searchField: string) => {
    const result = (orders || []).filter(
      (order: IOrder) =>
        order._id.toLowerCase().includes(searchField.toLowerCase()) ||
        order.user_id.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilterdOrders(result);
  };

  const handleValueChange = (value: FilterType) => {
    setFilterStatus(value);
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Flex flexDirection="column">
      <Heading marginY="50px">Orders</Heading>
      {/* Search bar */}
      <InputGroup>
        <Input
          placeholder="Search order ID or user ID ..."
          _placeholder={{ color: "D9D9D9" }}
          height="35px"
          width="200px"
          fontSize="12px"
          onChange={handleSearchChange}
          onKeyPress={() => handleSearchClick(searchField)}
        />
        <Button
          height="35px"
          size="xs"
          color="#1A202C"
          width="75px"
          onClick={() => handleSearchClick(searchField)}
        >
          Search
        </Button>
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
      {(filterdOrders || orders || [])
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
