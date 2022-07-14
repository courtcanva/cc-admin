// import CourtForm from "@/components/CourtsForm";
import { api } from "@/utils/axios";
import { routeHandler } from "@/utils/routeHandler";
import { useState } from "react";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const NewCourt = () => {
  const [inputData, setInputData] = useState({
    name: "",
    length: 0,
    width: 0,
    centreCircleRadius: 0,
    threePointRadius: 0,
    threePointLine: 0,
    lengthOfCorner: 0,
    restrictedAreaLength: 0,
    restrictedAreaWidth: 0,
    sideBorderWidth: 0,
    lineBorderWidth: 0,
    description: "",
  });
  // const keys = Object.keys(inputData)
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
  // console.log(inputData)
  return (
    <Container>
      <Flex flexDirection="column">
        <Heading marginY="50px">Add New Court</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around">
            {/* {keys.map((key) => {
              return(
              <FormControl width="250px" key={key}>
                <FormLabel htmlFor={key}>{key}</FormLabel>
                <Input id={key} onChange={(e) => handleInputData(e.target.value, key)} />
              </FormControl>
              )
            })} */}
            {Object.entries(inputData).map(([key]) => {
              // console.log(key)
              // console.log(value)
              const title =
                key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, " $&").trim();
              return (
                <FormControl width="250px" key={key}>
                  <FormLabel htmlFor={key}>{title}</FormLabel>
                  <Input
                    id={key}
                    // placeholder={value.toString()}
                    onChange={(e) => handleInputData(e.target.value, key)}
                  />
                </FormControl>
              );
            })}
            {/* <FormControl width="250px">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="length">Length</FormLabel>
              <Input id="length" onChange={(e) => setLength(Number(e.target.value))} />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="width">Width</FormLabel>
              <Input id="width" onChange={(e) => setWidth(Number(e.target.value))} />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="centreCircleRadius">Centre Circle Radius</FormLabel>
              <Input
                id="centreCircleRadius"
                onChange={(e) => setCentreCircleRadius(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="threePointRadius">Three Point Radius</FormLabel>
              <Input
                id="threePointRadius"
                onChange={(e) => setThreePointRadius(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="lengthOfCorner">LengthOfCorner</FormLabel>
              <Input
                id="lengthOfCorner"
                onChange={(e) => setLengthOfCorner(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="threePointLine">Three Point Line</FormLabel>
              <Input
                id="threePointLine"
                onChange={(e) => setThreePointLine(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="restrictedAreaLength">Restricted Area Length</FormLabel>
              <Input
                id="restrictedAreaLength"
                onChange={(e) => setRestrictedAreaLength(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="restrictedAreaWidth">Restricted Area Width</FormLabel>
              <Input
                id="restrictedAreaWidth"
                onChange={(e) => setRestrictedAreaWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="sideBorderWidth">Side Border Width</FormLabel>
              <Input
                id="sideBorderWidth"
                onChange={(e) => setSideBorderWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="lineBorderWidth">Line Border Width</FormLabel>
              <Input
                id="lineBorderWidth"
                onChange={(e) => setLineBorderWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input id="description" onChange={(e) => setDescription(e.target.value)} />
            </FormControl> */}
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
      </Flex>
    </Container>
  );
};

export default NewCourt;
