// import CourtForm from "@/components/CourtsForm";
import { api } from "@/utils/axios";
import { routeHandler } from "@/utils/routeHandler";
import { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import CourtForm from "@/components/CourtsForm";

const NewCourt = () => {
  // const [inputData, setInputData] = useState({
  //   name: "",
  //   length: 0,
  //   width: 0,
  //   centreCircleRadius: 0,
  //   threePointRadius: 0,
  //   threePointLine: 0,
  //   lengthOfCorner: 0,
  //   restrictedAreaLength: 0,
  //   restrictedAreaWidth: 0,
  //   sideBorderWidth: 0,
  //   lineBorderWidth: 0,
  //   description: "",
  // })
  // const keys = Object.keys(inputData)
  // const handleInputData = (value: string, key: string) => {
  //   const input = isNaN(+value)? value: +value;
  //   setInputData(Object({...inputData, [key]:input}))
  // }
  // const handleSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   console.log(inputData)
  //   try {
  //     api(process.env.NEXT_PUBLIC_API_COURTS as string, {
  //       method: "post",
  //       requestData: inputData
  //     });
  //     routeHandler();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Flex flexDirection="column">
        <Heading marginY="50px">Add New Court</Heading>
        <CourtForm />
      </Flex>
    </Container>
  );
};

export default NewCourt;
