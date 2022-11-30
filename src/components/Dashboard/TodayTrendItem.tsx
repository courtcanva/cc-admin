import { Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

interface Props {
  name: string;
  statNumber: number | string;
  statHelpText: number;
}

const TodayTrendItem = ({ name, statNumber, statHelpText }: Props) => {
  return (
    <Stat marginTop="12px">
      <StatLabel>{name}</StatLabel>
      <Flex alignItems="center">
        <StatNumber>{statNumber}</StatNumber>
        <StatHelpText marginBottom="0px" marginLeft="8px" display="flex" alignItems="center">
          {statHelpText !== 0 && (
            <>
              <StatArrow type={statHelpText > 0 ? "increase" : "decrease"} />
              {statHelpText}
            </>
          )}
        </StatHelpText>
      </Flex>
    </Stat>
  );
};

export default TodayTrendItem;
