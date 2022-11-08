import { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

interface PropsType {
  status: string;
}

const OrderSideBarState = ({ status }: PropsType) => {
  const [statusColor, setStatusColor] = useState("red");

  useEffect(() => {
    if (status == "unpaid") {
      setStatusColor("red");
    }
    if (status == "completed") {
      setStatusColor("DarkGreen");
    }
    if (status == "processing") {
      setStatusColor("blue");
    }
    if (status == "cancelled") {
      setStatusColor("gray");
    }
  }, [status]);

  console.log("statusColor", statusColor);

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
        color="#ffffff"
        fontSize="14px"
        fontWeight="700"
        backgroundColor={statusColor}
        border="#1A202C solid 1px"
        width="90px"
        height="30px"
        borderRadius="15px"
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
