import { Flex, Box, Text, Image } from "@chakra-ui/react";

interface PropsType {
  image: string;
  designName: string;
  courtType: string;
  quotation: string;
  quationDetials: any[];
  length: number;
  width: number;
  courtName: string;
  consigneeName: string;
  consigneePhone: string;
  consigneeEmail: string;
  shippingAddress: string;
}
const OrderItem = ({
  image,
  designName,
  courtType,
  quotation,
  quationDetials,
  length,
  width,
  courtName,
  consigneeName,
  consigneePhone,
  consigneeEmail,
  shippingAddress,
}: PropsType) => {
  return (
    <Flex border="#D9D9D9 solid 1px" borderWidth="0px 1px 1px 1px" padding="0px 0px 20px 10px">
      {/* image */}
      <Flex flex="2.2" width="250px" height="160px">
        <Image src={image} />
      </Flex>
      {/* middle/ court info */}
      <Flex flex="2.8" flexDirection="column" gap="10px" marginTop="20px">
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Design Name:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {" "}
            {designName}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Court Type:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {" "}
            {courtType}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Quatation Price:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {" "}
            {Number(quotation).toLocaleString()}
          </Text>
        </Flex>
        <Flex flexWrap="wrap" alignItems="center">
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Quatation Details:
          </Text>
          <Flex flexWrap="wrap">
            {quationDetials
              .filter((detail) => detail.quantity !== 0)
              .map((detail, index) => (
                <Flex key={index}>
                  <Box
                    marginLeft="3px"
                    width={10}
                    height={5}
                    bg={detail.color}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="12px"
                    fontWeight="700"
                    borderRadius="5"
                    border="#1A202C solid 1px"
                  >
                    {`${detail.quantity}`}
                  </Box>
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Court Size:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {" "}
            {length} * {width} {courtName}
          </Text>
        </Flex>
      </Flex>
      {/* mid-right/ shipping info */}
      <Flex flex="2.8" flexDirection="column" gap="10px" marginTop="20px">
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Name:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {consigneeName}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Phone:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {consigneePhone}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Email:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {consigneeEmail}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Shipping Address:
          </Text>
          <Text color="#1A202C" fontSize="14px" fontWeight="400" paddingLeft="10px">
            {shippingAddress}{" "}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderItem;
