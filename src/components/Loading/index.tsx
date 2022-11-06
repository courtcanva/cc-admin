import LoadingSVG from "@/assets/svg/loading.svg";
import { Center, Text } from "@chakra-ui/react";

interface Props {
  loadingText?: string;
}

const Loading = ({ loadingText }: Props) => {
  return (
    <Center flexDirection="column">
      <LoadingSVG width="50px" height="50px"></LoadingSVG>
      <Text fontSize="24px" color="#B6B6B6" marginTop="10px">
        {loadingText}
      </Text>
    </Center>
  );
};

export default Loading;
