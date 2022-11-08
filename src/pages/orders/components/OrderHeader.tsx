import { Flex, Text } from "@chakra-ui/react";

interface PropsType {
  createdAt: string;
  _id: string;
  userId: string;
}

const OrderHeader = ({ createdAt, _id, userId }: PropsType) => {
  return (
    <Flex
      backgroundColor="#DAF3FF"
      height="42.5px"
      alignItems="center"
      justifyContent="space-between"
      border="#D9D9D9 solid 0.5px"
    >
      <Flex gap="18px" marginLeft="18px">
        <Text fontSize="14px" fontWeight="700" color="#1A202C" paddingLeft="10px">
          Create Date: {createdAt.split("T")[0]}
        </Text>
        <Text fontSize="14px" fontWeight="700" color="#1A202C" marginLeft="50px">
          Order #: {_id}
        </Text>
      </Flex>
      <Text fontSize="14px" fontWeight="700" color="#1A202C" marginRight="18px">
        Account ID : {userId}
      </Text>
    </Flex>
  );
};

export default OrderHeader;
