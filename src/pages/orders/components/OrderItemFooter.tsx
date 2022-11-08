import { Flex, Text } from "@chakra-ui/react";
import formatDate from "@/utils/formatDate";

interface PropsType {
  updateTime: string;
  totalQuatation: string;
  depositePaid: string;
}

const OrderItemFooter = ({ updateTime, totalQuatation, depositePaid }: PropsType) => {
  return (
    <Flex border="#D9D9D9 solid 1px" borderWidth="0px 1px 1px 1px" padding="10px 0px">
      <Flex flex="2.2">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="25px">
          Update time:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {formatDate(updateTime)}
        </Text>
      </Flex>
      <Flex flex="2.8">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="10px">
          Total Quatation Price:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {totalQuatation}
        </Text>
      </Flex>
      <Flex flex="2.8">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="5px">
          Deposite:
        </Text>
        <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
          {depositePaid}
        </Text>
      </Flex>
    </Flex>
  );
};

export default OrderItemFooter;
