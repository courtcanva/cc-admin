import PieChartComponent from "./PieChartComponent";
import { COURT_TYPE_COLOR } from "@/constants/courtTypeColor";
import { CourtCategorySoldCount } from "@/interfaces/dashboardData";
import { Flex, Text, Box } from "@chakra-ui/react";

interface Props {
  courtCategorySoldCountList: CourtCategorySoldCount[];
}

interface CourtTypeColorKey {
  "Pro Full Court": string;
  "Full Court": string;
  "Pro Half Court": string;
  "Half Court": string;
  "Medium Court": string;
  "Small Court": string;
}

function CourtCategorySold({ courtCategorySoldCountList }: Props) {
  const pieChartColors: string[] = [];
  const pieChartData = courtCategorySoldCountList.map((item) => {
    pieChartColors.push(COURT_TYPE_COLOR[item._id as keyof CourtTypeColorKey]);
    return {
      name: item._id,
      value: item.count,
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
        Court Category Sold
      </Text>
      <Flex marginTop="12px" marginBottom="24px" flexWrap="wrap" justifyContent="center" gap="10px">
        {Object.keys(COURT_TYPE_COLOR).map((item) => {
          return (
            <Flex key={item} alignItems="center">
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                backgroundColor={COURT_TYPE_COLOR[item as keyof CourtTypeColorKey]}
              ></Box>
              <Text marginLeft="8px" fontSize="11px" color="#A6A8B1">
                {item}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex justifyContent="center">
        <PieChartComponent
          pieChartData={pieChartData}
          pieChartColors={pieChartColors}
        ></PieChartComponent>
      </Flex>
    </Box>
  );
}

export default CourtCategorySold;
