import formatCurrency from "@/utils/formatCurrency";
import TodayTrendItem from "./TodayTrendItem";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  todayTotalOrder: number;
  orderGrowth: number;
  todayTotalSales: number;
  saleGrowth: number;
  todayAddedUsers: number;
  userGrowth: number;
  todayAddedTemplates: number;
  templatesGrowth: number;
}

const TodayTrend = ({
  todayTotalOrder,
  orderGrowth,
  todayTotalSales,
  saleGrowth,
  todayAddedUsers,
  userGrowth,
  todayAddedTemplates,
  templatesGrowth,
}: Props) => {
  return (
    <Box
      height="100%"
      padding="12px 15px"
      borderRadius="12px"
      backgroundColor="rgba(85, 112, 241, 0.12)"
    >
      <Text fontSize="18px" fontWeight="500" color="#45464E">
        Today&#39;s trends
      </Text>
      <TodayTrendItem
        name="Orders"
        statNumber={todayTotalOrder}
        statHelpText={orderGrowth}
      ></TodayTrendItem>
      <TodayTrendItem
        name="Sales"
        statNumber={formatCurrency(todayTotalSales)}
        statHelpText={saleGrowth}
      ></TodayTrendItem>
      <TodayTrendItem
        name="Users"
        statNumber={todayAddedUsers}
        statHelpText={userGrowth}
      ></TodayTrendItem>
      <TodayTrendItem
        name="Templates"
        statNumber={todayAddedTemplates}
        statHelpText={templatesGrowth}
      ></TodayTrendItem>
    </Box>
  );
};

export default TodayTrend;
