import { Heading, InputGroup, Input, Button, Flex, Image, Text } from "@chakra-ui/react";
import OrderHeader from "./OrderHeader";
import OrderItem from "./OrderItem";
import OrderItemFooter from "./OrderItemFooter";
import OrderSideBarPaid from "./OrderSideBarPaid";
import OrderSideBarState from "./OrderSideBarState";
import _ from "lodash";

interface PropTypes {
  _id: string;
  createdAt: string;
  user_id: string;
  updatedAt: string;
  status: string;
}

const OrderContainer = ({ order }: any) => {
  return (
    <Flex key={order._id} flexDirection="column">
      {/* Order Header blue bar */}
      <OrderHeader createdAt={order.createdAt} _id={order._id} userId={order.user_id} />

      {/* item block */}

      <Flex marginBottom="20px">
        <Flex flex="79" flexDirection="column">
          {(order.items || []).map((item: any, index: number) => (
            <OrderItem
              key={index}
              image={item.image}
              designName={item.design.designName}
              courtType={"Basketball"}
              quotation={item.quotation}
              quationDetials={item.quotationDetails}
              length={item.design.courtSize.length}
              width={item.design.courtSize.width}
              courtName={item.design.courtSize.name}
              consigneeName={"Tom Jerry"}
              consigneePhone={"0420678345"}
              consigneeEmail={"tomJerry@gmail.com"}
              shippingAddress={"7 Randall St, Brighton 3178, VIC "}
            />
          ))}
          {/* item block left part footer */}
          <OrderItemFooter
            updateTime={order.updatedAt}
            totalQuatation={_.sumBy(order.items, function (o: any) {
              return parseFloat(o.quotation);
            }).toLocaleString()}
            depositePaid={`$A 1,000`}
          />
        </Flex>
        {/* Right */}
        <OrderSideBarPaid depositePaid={`$A 1,000`} />
        <OrderSideBarState status={order.status} />
      </Flex>
    </Flex>
  );
};

export default OrderContainer;
