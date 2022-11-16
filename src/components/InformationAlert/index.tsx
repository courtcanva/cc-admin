import { Alert, AlertIcon } from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";

interface Props {
  informationText: string;
}

const InformationAlert = ({ informationText }: Props) => {
  return (
    <Alert width="fit-content" variant="solid" backgroundColor="#2C4E8A" borderRadius="10px">
      <AlertIcon as={RiErrorWarningLine} />
      {informationText}
    </Alert>
  );
};

export default InformationAlert;
