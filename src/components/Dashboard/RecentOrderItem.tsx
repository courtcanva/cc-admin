import { ORDER_STATUS_COLOR } from "@/constants/orderStatusColor";
import { IOrder } from "@/interfaces/orderData";
import formatCurrency from "@/utils/formatCurrency";
import formatDate from "@/utils/formatDate";
import { Grid, GridItem, Text, Box, Center } from "@chakra-ui/react";

interface Props {
  order: IOrder;
}

const RecentOrderItem = ({ order }: Props) => {
  return (
    <Grid
      paddingBottom="12px"
      marginTop="12px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      alignItems="center"
      borderBottom="1px solid #BEC0CA"
    >
      <GridItem>
        <Text fontSize="14px" color="#45464E">
          Order:{order._id}
        </Text>
      </GridItem>
      <GridItem justifySelf="right">
        <Text fontSize="12px" color="#A6A8B1" textAlign="right">
          {formatDate(order.createdAt)}
        </Text>
      </GridItem>
      <GridItem>
        <Text fontSize="14px" fontWeight="500" color="#33343A">
          {formatCurrency(
            order.status === "completed"
              ? order.paymentInfo!.amountTotal / 100
              : order.items.reduce((total, item) => {
                  return total + Number(item.quotation) * order.depositRatio;
                }, 0)
          )}
        </Text>
      </GridItem>
      <GridItem justifySelf="right">
        <Center
          padding="2px 15px"
          fontSize="12px"
          fontWeight="700"
          color="#FFFFFF"
          backgroundColor={ORDER_STATUS_COLOR[order.status]}
          borderRadius="8px"
        >
          {order.status}
        </Center>
      </GridItem>
    </Grid>
  );
};

export default RecentOrderItem;
