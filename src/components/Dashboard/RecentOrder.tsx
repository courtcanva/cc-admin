import RecentOrderItem from "./RecentOrderItem";
import { IOrder } from "@/interfaces/orderData";
import { Text, Box } from "@chakra-ui/react";

interface Props {
  recentOrders: IOrder[];
}

function RecentOrder({ recentOrders }: Props) {
  return (
    <Box
      height="100%"
      padding="12px 15px"
      borderRadius="12px"
      backgroundColor="rgba(85, 112, 241, 0.12)"
    >
      <Text fontSize="18px" fontWeight="500" color="#45464E">
        Recent Orders
      </Text>
      {recentOrders.map((item) => {
        return <RecentOrderItem key={item._id} order={item}></RecentOrderItem>;
      })}
    </Box>
  );
}

export default RecentOrder;
