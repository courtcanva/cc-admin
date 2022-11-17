import { DEPOSIT_TABLE_HEADER } from "@/constants/tabelHeaders";
import { IDeposit } from "@/interfaces/depositData";
import { useLazyGetDepositQuery } from "../../redux/api/depositApi";
import { Box, Text, Table, Tr, Tbody, IconButton, Td, useDisclosure } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../TableHeader";
import EditConfirmModal from "./EditConfirmModal";
import { useEffect, useState } from "react";

const DepositBar = () => {
  const [trigger, { data: depositData }] = useLazyGetDepositQuery();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [{ updatedAt, depositRate }, setDepositdata] = useState({ updatedAt: "", depositRate: 0 });

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    const dataCopy = { ...depositData } as IDeposit;
    const { updatedAt, depositRate } = dataCopy;
    setDepositdata({ updatedAt, depositRate });
  }, [depositData]);

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
      <EditConfirmModal onClose={onClose} isOpen={isOpen} currentDeposit={depositRate} />
    </>
  );
};

export default DepositBar;
