import { Spinner, Center, Text } from "@chakra-ui/react";
export const IsLoading = () => {
  return (
    <Center paddingTop="30px">
      <Text fontWeight="bold" fontSize="3xl">
        Loading...
      </Text>
      <Spinner
        marginLeft="30px"
        thickness="4px"
        speed="0.65s"
        emptyColor="background.tertiary"
        color="fontcolor.tertiary"
        size="lg"
      />
    </Center>
  );
};

interface Props {
  text: string;
}
export const NoData = ({ text }: Props) => {
  return (
    <Center paddingTop="30px">
      <Text fontWeight="bold" fontSize="3xl">
        No {text}
      </Text>
    </Center>
  );
};
