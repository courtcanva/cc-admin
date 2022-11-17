import { useState } from "react";
import {
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Box,
} from "@chakra-ui/react";
import { useListUsersQuery } from "../../redux/api/usersAccountApi";
import TableHeader from "@/components/TableHeader";
import { IUser } from "@/interfaces/userData";
import PaginationButton from "@/components/PaginationButton.tsx";
import { LIMIT, OFFSET } from "@/constants/paginationData";
import { USERS_TABLE_HEADER } from "@/constants/tableHeaders";
import { IsLoading, NoData } from "@/components/IsLoadingOrNoData.tsx";

const Accounts = () => {
  const [offset, setOffSet] = useState<number>(OFFSET);
  const [page, setPage] = useState<number>(1);
  const limit = LIMIT;
  const { data: usersAccountData, isLoading } = useListUsersQuery({ offset, limit });
  const totalPages =
    !usersAccountData || usersAccountData?.total === 0
      ? 1
      : Math.ceil(usersAccountData?.total / limit);
  const title = "User";

  return (
    <Flex height="100vh" flexDirection="column" justifyContent="space-between">
      <Box>
        <Flex flexDirection="column" maxWidth="1000" margin="0 auto">
          <Heading marginTop="50px">User Account</Heading>
          <Stat width="100px" alignSelf="flex-end" marginRight="10px" marginY="20px">
            <StatLabel>Total Users</StatLabel>
            <StatNumber>{`${usersAccountData?.total || 0}`}</StatNumber>
          </Stat>
        </Flex>
        <Flex flexDirection="column" maxWidth="1000" margin="20px auto">
          <TableContainer>
            <Table variant="simple">
              <TableHeader tableHeaderData={USERS_TABLE_HEADER} />
              <Tbody>
                {usersAccountData?.data.map((user: IUser) => {
                  const { _id, firstName, lastName, email } = user;
                  return (
                    <>
                      <Tr key={user._id} _hover={{ bg: "gray.50" }}>
                        {Object.entries({ _id, firstName, lastName, email }).map(([key, value]) => {
                          return (
                            <Td key={key} textAlign="center">
                              {value}
                            </Td>
                          );
                        })}
                        <Td textAlign="center">{user.googleId ? "Google" : "Email"}</Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          {(isLoading || !usersAccountData) && <IsLoading />}
          {usersAccountData?.data.length === 0 && <NoData text={title} />}
        </Flex>
      </Box>
      <Box marginBottom="20px">
        <PaginationButton
          setOffSet={setOffSet}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Flex>
  );
};

export default Accounts;
