import { DEPOSIT_TABLE_HEADER } from "@/constants/tabelHeaders";
import { IDeposit } from "@/interfaces/depositData";
import { useGetDepositQuery } from "../../redux/api/depositApi";
import { Box, Text, Table, Tr, Tbody, IconButton, Td, useDisclosure } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../TableHeader";
import EditComfirmModal from "./EditComfirmModal";

const DepositBar = () => {
  const { data: depositData } = useGetDepositQuery();
  const dataCopy = { ...depositData } as IDeposit;
  console.log(dataCopy["updatedAt"]);
  // dataCopy["updatedAt"] = formatDate(dataCopy.updatedAt);
  const { updatedAt, depositRate } = dataCopy;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box paddingY="50px">
        <Text fontSize="36px" fontWeight="700">
          Deposit
        </Text>
      </Box>
      <Table variant="simple">
        <TableHeader tableHeaderData={DEPOSIT_TABLE_HEADER} />
        <Tbody>
          <Tr>
            {Object.entries({ depositRate, updatedAt }).map(([key, value]) => (
              <Td key={key} textAlign="center">
                {value}
              </Td>
            ))}
            <Td textAlign="center">
              <IconButton icon={<FaPen />} aria-label="change deposit rate" onClick={onOpen} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <EditComfirmModal onClose={onClose} isOpen={isOpen} currentDeposit={depositRate} />
    </>
  );
};

export default DepositBar;
