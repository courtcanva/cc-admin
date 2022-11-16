import { Badge } from "@chakra-ui/react";

interface Props {
  colorScheme: string;
  text: string;
}

const TableBadge = ({ colorScheme, text }: Props) => {
  return (
    <Badge borderRadius="20px" colorScheme={colorScheme} textTransform="none">
      {text}
    </Badge>
  );
};

export default TableBadge;
