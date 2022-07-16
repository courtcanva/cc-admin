import { routeHandler } from "@/utils/routeHandler";
import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../../utils/axios";
import { ICourt } from "../../interfaces/courtData";
import { headerCellGenerator } from "@/utils/headerCellGenerator";
import { ChevronLeftIcon } from "@chakra-ui/icons";

type Props = {
  header: string;
  courtData: ICourt;
  API: string;
  method: string;
};
const CourtForm: React.FC<Props> = ({ header, courtData, API, method }) => {
  const [inputData, setInputData] = useState({});
  const handleInputData = (value: string, key: string) => {
    const input = isNaN(+value) ? value : +value;
    setInputData(Object({ ...inputData, [key]: input }));
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await api(API as string, {
        method: method,
        requestData: inputData,
      });
      routeHandler();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        gap="30px"
        justifyContent="space-between"
        // marginTop="50px"
      >
        <Button
          marginTop="100px"
          width="250px"
          backgroundColor="transparent"
          border="2px"
          borderColor="#f05544"
          _hover={{ bg: "#e94d3c", color: "#fff" }}
          leftIcon={<ChevronLeftIcon />}
          onClick={() => routeHandler("")}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          marginTop="100px"
          width="250px"
          backgroundColor="transparent"
          border="2px"
          borderColor="#40B484"
          _hover={{ bg: "#40B484", color: "#fff" }}
        >
          Save
        </Button>
      </Flex>
      <Heading marginY="70px" alignSelf="center">
        {header}
      </Heading>
      <Flex maxWidth="1100px" flexDirection="row" flexWrap="wrap" gap="30px" alignSelf="center">
        {Object.entries(courtData).map(([key, value]) => {
          const headerCellContent = headerCellGenerator(key);
          return (
            <FormControl width="250px" key={key}>
              <FormLabel htmlFor={key}>{headerCellContent}</FormLabel>
              <Input
                id={key}
                placeholder={value ? value.toString() : ""}
                onChange={(e) => handleInputData(e.target.value, key)}
              />
            </FormControl>
          );
        })}
      </Flex>
    </form>
  );
};
export default CourtForm;
