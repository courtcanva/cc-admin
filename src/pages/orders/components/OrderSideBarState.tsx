import { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

interface PropsType {
  status: string;
}

const OrderSideBarState = ({ status }: PropsType) => {
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    if (status == "unpaid") {
      setStatusColor("#C13D46");
    }
    if (status == "completed") {
      setStatusColor("#44BC84");
    }
    if (status == "processing") {
      setStatusColor("#7C9FDF");
    }
    if (status == "cancelled") {
      setStatusColor("gray");
    }
  }, [status]);

  return (
    <Flex
      flex="10"
      alignItems="center"
      paddingTop="31.5px"
      flexDirection="column"
      border="#D9D9D9 solid 1px"
      borderWidth="0px 1px 1px 0px"
    >
      <Box
        color="#FFFFFF"
        fontSize="14px"
        fontWeight="700"
        backgroundColor={statusColor}
        width="80px"
        height="25px"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {status}
      </Box>
    </Flex>
  );
};

export default OrderSideBarState;
