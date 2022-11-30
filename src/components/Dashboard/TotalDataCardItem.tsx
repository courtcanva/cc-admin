import { TotalCardItem } from "@/interfaces/dashboardData";
import { Box, Text } from "@chakra-ui/react";

const TotalDataCardItem = ({ title, value }: TotalCardItem) => {
  return (
    <Box>
      <Text fontSize="0.875rem" fontWeight="500">
        {title}
      </Text>
      <Text fontSize="1.5rem" fontWeight="600">
        {value}
      </Text>
    </Box>
  );
};

export default TotalDataCardItem;
