import { EXPIRATION_TABLE_HEADER } from "@/constants/tableHeaders";
import { IExpiration } from "@/interfaces/expirationData";
import {
  useLazyGetExpirationQuery,
  useUpdateExpirationMutation,
} from "../../redux/api/expirationApi";
import { Box, Text, Table, Tr, Tbody, IconButton, Td, useDisclosure } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../TableHeader";
import EditConfirmModal from "../ConfirmModal/EditConfirmModal";
import { useEffect, useState } from "react";

const ExpirationBar = () => {
  const [loading, { data: expiration }] = useLazyGetExpirationQuery();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [{ updatedAt, expireDays }, setExpirationData] = useState({
    updatedAt: "2022-11-20 17:10:32",
    expireDays: 1,
  });

  // load expiration data from api once
  useEffect(() => {
    loading();
  }, []);

  // update expiration data when change
  useEffect(() => {
    const dataCopy = { ...expiration } as IExpiration;
    const { updatedAt, expireDays } = dataCopy;
    setExpirationData({ updatedAt, expireDays });
  }, [expiration]);

  const step = 1;
  const min = 1;
  const max = 365;
  const updateData = useUpdateExpirationMutation();
  const precision = 0;

  return (
    <>
      <Box paddingY="50px">
        <Text fontSize="36px" fontWeight="700">
          Expiration
        </Text>
      </Box>
      <Table variant="simple">
        <TableHeader tableHeaderData={EXPIRATION_TABLE_HEADER} />
        <Tbody>
          <Tr>
            <Td textAlign="center">{expireDays}</Td>
            <Td textAlign="center">{updatedAt}</Td>
            <Td textAlign="center">
              <IconButton
                icon={<FaPen />}
                aria-label="change expiration day"
                onClick={onOpen}
                data-testid="operationButton"
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <EditConfirmModal
        onClose={onClose}
        isOpen={isOpen}
        currentData={expireDays}
        updateData={updateData}
        precision={precision}
        step={step}
        min={min}
        max={max}
      />
    </>
  );
};

export default ExpirationBar;
