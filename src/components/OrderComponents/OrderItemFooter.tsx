import { Flex, Text } from "@chakra-ui/react";
import formatDate from "@/utils/formatDate";

interface PropsType {
  updateTime: string;
  totalQuotation: string;
  depositRate: number;
}

const OrderItemFooter = ({ updateTime, totalQuotation, depositRate }: PropsType) => {
  return (
    <Flex border="#D9D9D9 solid 1px" borderWidth="0px 1px 1px 1px" padding="10px 0px">
      <Flex flex="2.2">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="25px">
          Update Time:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {formatDate(updateTime)}
        </Text>
      </Flex>
      <Flex flex="2.8">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="7px">
          Total Quotation Price:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {totalQuotation}
        </Text>
      </Flex>
      <Flex flex="2.8">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="5px">
          Deposit Rate:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {depositRate}
        </Text>
      </Flex>
    </Flex>
  );
};

export default OrderItemFooter;
