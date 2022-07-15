import { routeHandler } from "@/utils/routeHandler";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../../utils/axios";
import { ICourt } from "../../interfaces/courtData";

const CourtForm = (courtData: ICourt) => {
  const [inputData, setInputData] = useState(courtData);

  const handleInputData = (value: string, key: string) => {
    const input = isNaN(+value) ? value : +value;
    setInputData(Object({ ...inputData, [key]: input }));
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(inputData);
    try {
      api(process.env.NEXT_PUBLIC_API_COURTS as string, {
        method: "post",
        requestData: inputData,
      });
      routeHandler();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around">
        {Object.entries(inputData).map(([key, value]) => {
          const title = key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, " $&").trim();
          return (
            <FormControl width="250px" key={key}>
              <FormLabel htmlFor={key}>{title}</FormLabel>
              <Input
                id={key}
                placeholder={value ? value : ""}
                onChange={(e) => handleInputData(e.target.value, key)}
              />
            </FormControl>
          );
        })}
      </Flex>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        gap="20px"
        justifyContent="space-around"
        marginTop="50px"
      >
        <Button
          width="250px"
          backgroundColor="transparent"
          border="2px"
          borderColor="#f05544"
          _hover={{ bg: "#e94d3c", color: "#fff" }}
          onClick={() => routeHandler("")}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          width="250px"
          backgroundColor="transparent"
          border="2px"
          borderColor="#40B484"
          _hover={{ bg: "#40B484", color: "#fff" }}
        >
          Save
        </Button>
      </Flex>
    </form>
  );
};
export default CourtForm;
