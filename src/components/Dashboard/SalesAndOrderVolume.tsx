import BiaxialLineChartComponent from "./BiaxialLineChartComponent";
import { dailyTotalOrderAndSales } from "@/interfaces/dashboardData";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  lastSevenDaysTotalOrderAndSales: dailyTotalOrderAndSales[];
}

const getLastSevenDays = () => {
  const dates = [];
  for (
    let i = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
    i <= new Date().getTime();
    i += 24 * 60 * 60 * 1000
  ) {
    dates.push(new Date(i).getDate());
  }
  return dates;
};

const SalesAndOrderVolume = ({ lastSevenDaysTotalOrderAndSales }: Props) => {
  const lineChartData = getLastSevenDays().map((item) => {
    for (let i = 0; i < lastSevenDaysTotalOrderAndSales.length; i++) {
      if (lastSevenDaysTotalOrderAndSales[i]._id === item) {
        return {
          name: item,
          Order: lastSevenDaysTotalOrderAndSales[i].orderCount,
          Sales: lastSevenDaysTotalOrderAndSales[i].amountTotal / 100,
        };
      }
    }
    return {
      name: item,
      Order: 0,
      Sales: 0,
    };
  });

  return (
    <Box
      height="100%"
      padding="12px 15px"
      borderRadius="12px"
      backgroundColor="rgba(85, 112, 241, 0.12)"
    >
      <Text fontSize="18px" fontWeight="500" color="#45464E">
        Last 7 days Sales / Orders Volume
      </Text>
      <BiaxialLineChartComponent lineChartData={lineChartData}></BiaxialLineChartComponent>
    </Box>
  );
};

export default SalesAndOrderVolume;
