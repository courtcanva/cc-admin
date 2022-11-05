import { useState } from "react";
import {
  Flex,
  Heading,
  Spinner,
  Center,
  Text,
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
import { USERS_TABLE_HEADER } from "@/constants/tabelHeaders";

const Accounts = () => {
  const [offset, setOffSet] = useState<number>(OFFSET);
  const [page, setPage] = useState<number>(1);
  const limit = LIMIT;
  const { data: usersAccountData, isLoading, isFetching } = useListUsersQuery({ offset, limit });
  const totalPages =
    !usersAccountData || usersAccountData?.total === 0
      ? 1
      : Math.ceil(usersAccountData?.total / limit);
  console.log(usersAccountData);

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
                {(isLoading || !usersAccountData) && (
                  <Center paddingTop="100px">
                    <Text fontWeight="bold" fontSize="2xl">
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
                )}
                {usersAccountData?.data.length === 0 && (
                  <Center paddingTop="30px">
                    <Text fontWeight="bold" fontSize="3xl">
                      No User
                    </Text>
                  </Center>
                )}
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
        </Flex>
      </Box>
      <Box marginBottom="20px">
        <PaginationButton
          setOffSet={setOffSet}
          isFetching={isFetching}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Flex>
  );
};

export default Accounts;
