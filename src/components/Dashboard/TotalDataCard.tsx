import { IconType } from "react-icons";
import TotalDataCardItem from "./TotalDataCardItem";
import { TotalCardItem } from "@/interfaces/dashboardData";
import { Box, Flex, Icon } from "@chakra-ui/react";

interface Props {
  icon: IconType;
  background: string;
  totalCardItems: TotalCardItem[];
}

const TotalDataCard = ({ icon, background, totalCardItems }: Props) => {
  return (
    <Box
      position="relative"
      padding="12px 15px"
      borderRadius="15px"
      background={background}
      boxShadow="0px 2px 10px rgba(175, 137, 255, 0.15)"
      data-testid="total-data-card-container"
    >
      <Box width="32px" height="32px" padding="8px" borderRadius="8px" backgroundColor="#FFFFFF">
        <Icon as={icon}></Icon>
      </Box>
      <Flex gap="24px" marginTop="16px" flexWrap="wrap" color="#FFFFFF">
        {totalCardItems.map(({ title, value }, index) => (
          <TotalDataCardItem key={index} title={title} value={value}></TotalDataCardItem>
        ))}
      </Flex>
      <Box position="absolute" right="0" bottom="0">
        <Icon
          as={icon}
          w="84px"
          h="84px"
          color="rgba(255, 255, 255, 0.13)"
          transform=" rotate(-30deg)"
        />
      </Box>
    </Box>
  );
};

export default TotalDataCard;
