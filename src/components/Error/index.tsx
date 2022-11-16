import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { RiCloseCircleLine } from "react-icons/ri";

interface Props {
  errorTitle?: string;
  errorDescription?: string;
}

const Error = ({ errorTitle, errorDescription }: Props) => {
  return (
    <Alert
      status="error"
      variant="solid"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="50%"
      backgroundColor="background.primary"
      borderRadius="10px"
      boxShadow="0px 4px 24px rgba(242, 153, 74, 0.4)"
    >
      <AlertIcon as={RiCloseCircleLine} boxSize="50px" />
      <AlertTitle marginTop={4} marginBottom={1} fontSize="lg">
        {errorTitle}
      </AlertTitle>
      <AlertDescription>{errorDescription}</AlertDescription>
    </Alert>
  );
};

export default Error;
