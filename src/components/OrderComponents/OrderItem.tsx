import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { IOrderItemQuotationDetail } from "@/interfaces/orderData";
import formatCurrency from "@/utils/formatCurrency";

interface PropsType {
  image: string;
  designName: string;
  courtType: string;
  quotation: string;
  quotationDetails: IOrderItemQuotationDetail[];
  length: number;
  width: number;
  courtName: string;
  consigneeName?: string;
  consigneePhone?: string;
  consigneeEmail?: string;
  shippingAddress?: string;
}

const OrderItem = ({
  image,
  designName,
  courtType,
  quotation,
  quotationDetails,
  length,
  width,
  courtName,
  consigneeName = "N/A",
  consigneePhone = "N/A",
  consigneeEmail = "N/A",
  shippingAddress = "N/A",
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
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px">
            {designName}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Court Type:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px">
            {courtType}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Quotation Price:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px">
            {formatCurrency(quotation)}
          </Text>
        </Flex>
        <Flex flexWrap="wrap" alignItems="center">
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Quotation Details:
          </Text>
          <Flex flexWrap="wrap">
            {quotationDetails
              // delete purple tiles, which is 0 quantity
              .filter((detail: IOrderItemQuotationDetail) => detail.quantity !== 0)
              .map((detail: IOrderItemQuotationDetail, index: number) => (
                <Flex key={index}>
                  <Box
                    marginLeft="3px"
                    width={10}
                    height={5}
                    backgroundColor={detail.color}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5"
                    border="#1A202C solid 1px"
                    color="#FFFFFF"
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
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px">
            {`${length}(L) * ${width}(W) ${courtName}`}
          </Text>
        </Flex>
      </Flex>
      {/* mid-right/ shipping info */}
      <Flex flex="2.8" flexDirection="column" gap="10px" marginTop="20px">
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Name:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px" data-testid="consignee-name">
            {consigneeName}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Phone:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px" data-testid="consignee-phone">
            {consigneePhone}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Consignee Email:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px" data-testid="consignee-email">
            {consigneeEmail}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="14px" fontWeight="700" color="#1A202C">
            Shipping Address:
          </Text>
          <Text color="#1A202C" fontSize="14px" paddingLeft="10px" data-testid="shipping-address">
            {shippingAddress}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderItem;
