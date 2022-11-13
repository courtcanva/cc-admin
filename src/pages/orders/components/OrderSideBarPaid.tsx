import { Flex, Text } from "@chakra-ui/react";

interface PropsType {
  depositePaid: string;
}

const OrderSideBarPaid = ({ depositePaid }: PropsType) => {
  return (
    <Flex
      flex="10"
      justifyContent="center"
      paddingTop="31.5px"
      border="#D9D9D9 solid 1px"
      borderWidth="0px 1px 1px 0px"
    >
      <Text color="#1A202C" fontSize="14px" fontWeight="700">
        {`$${depositePaid}`}
      </Text>
    </Flex>
  );
};

export default OrderSideBarPaid;
