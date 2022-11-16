import { Button, Flex, Text } from "@chakra-ui/react";

type Props = {
  depositRatio: number
};

const DepositBar = (props: Props) => {
  return (
    <Flex gap="20px" justifyContent="center" alignItems="center">
      <Flex>
        <Text>DepositBar</Text>
      </Flex>
      <Flex>
        <Text></Text>
        <Button></Button>
      </Flex>
    </Flex>
  );
};

export default DepositBar;
