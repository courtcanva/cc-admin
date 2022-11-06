import { Button, HStack, Icon, Box, Center } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { LIMIT } from "@/constants/paginationData";
interface Props {
  setOffSet: Dispatch<SetStateAction<number>>;
  totalPages: number | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const PaginationButton = ({ setOffSet, totalPages, page, setPage }: Props) => {
  const arrowBackHandle = () => {
    setOffSet((prevOffSet) => prevOffSet - LIMIT);
    setPage((prevPage) => prevPage - 1);
  };

  const arrowForwardHandle = () => {
    setOffSet((prevOffSet) => prevOffSet + LIMIT);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Center>
      <HStack spacing="14px">
        <Button onClick={arrowBackHandle} disabled={page === 1} aria-label="arrow back">
          <Icon as={MdArrowBack} data-testid="arrow-back-label" />
        </Button>
        <Button
          onClick={arrowForwardHandle}
          disabled={page === totalPages}
          aria-label="arrow forward"
        >
          <Icon as={MdArrowForward} data-testid="arrow-forward-label" />
        </Button>
        <Box>{`${page} / ${totalPages}`}</Box>
      </HStack>
    </Center>
  );
};

export default PaginationButton;
