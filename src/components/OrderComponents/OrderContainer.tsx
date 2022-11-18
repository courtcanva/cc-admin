import { Flex } from "@chakra-ui/react";
import OrderHeader from "./OrderHeader";
import OrderItem from "./OrderItem";
import OrderItemFooter from "./OrderItemFooter";
import OrderSideBarPaid from "./OrderSideBarPaid";
import OrderSideBarState from "./OrderSideBarState";
import _ from "lodash";
import { IOrder, IOrderItem } from "@/interfaces/orderData";
import formatCurrency from "@/utils/formatCurrency";

interface OrderContainerProps {
  order: IOrder;
}

const OrderContainer = ({ order }: OrderContainerProps) => {
  return (
    <Flex flexDirection="column">
      {/* Order Header blue bar */}
      <OrderHeader createdAt={order.createdAt} _id={order._id} userId={order.user_id} />

      {/* item block */}
      <Flex marginBottom="20px">
        <Flex flex="79" flexDirection="column">
          {(order.items || []).map((item: IOrderItem, index: number) => (
            <OrderItem
              key={index}
              image={item.image}
              designName={item.design.designName}
              courtType={item.design.courtType}
              quotation={item.quotation}
              quotationDetails={item.quotationDetails}
              length={item.design.courtSize.length}
              width={item.design.courtSize.width}
              courtName={item.design.courtSize.name}
              consigneeName={order.paymentInfo?.name}
              consigneePhone={order.paymentInfo?.phone}
              consigneeEmail={order.paymentInfo?.email}
              shippingAddress={`${order.paymentInfo?.billingAddress.line2 || " "} ${
                order.paymentInfo?.billingAddress.line1 || " "
              } ${order.paymentInfo?.billingAddress.city || " "} ${
                order.paymentInfo?.billingAddress.postalCode || "N/A"
              }`}
            />
          ))}
          {/* item block left part footer */}
          <OrderItemFooter
            updateTime={order.updatedAt}
            totalQuotation={formatCurrency(
              _.sumBy(order.items, function (o: IOrderItem) {
                return parseFloat(o.quotation);
              })
            )}
            depositRate={order.depositRatio}
          />
        </Flex>
        {/* Right */}
        <OrderSideBarPaid
          depositPaid={
            order.status === "unpaid"
              ? "N/A"
              : formatCurrency(
                  _.sumBy(order.items, function (o: IOrderItem) {
                    return parseFloat(o.quotation);
                  }) * order.depositRatio
                )
          }
        />
        <OrderSideBarState status={order.status} />
      </Flex>
    </Flex>
  );
};

export default OrderContainer;
