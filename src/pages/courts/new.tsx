import { api } from "@/utils/axios";
import {
  Text,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const NewCourt = () => {
  const router = useRouter();
  const [name, setName] = useState<string>();
  const [length, setLength] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [centreCircleRadius, setCentreCircleRadius] = useState<number>();
  const [threePointRadius, setThreePointRadius] = useState<number>();
  const [threePointLine, setThreePointLine] = useState<number>();
  const [lengthOfCorner, setLengthOfCorner] = useState<number>();
  const [restrictedAreaLength, setRestrictedAreaLength] = useState<number>();
  const [restrictedAreaWidth, setRestrictedAreaWidth] = useState<number>();
  const [sideBorderWidth, setSideBorderWidth] = useState<number>();
  const [lineBorderWidth, setLineBorderWidth] = useState<number>();
  const [description, setDescription] = useState<string>();

  const handleSubmit = (event: React.SyntheticEvent) => {
    console.log({
      name,
      length,
      width,
      centreCircleRadius,
      threePointRadius,
      threePointLine,
      lengthOfCorner,
      restrictedAreaLength,
      restrictedAreaWidth,
      sideBorderWidth,
      lineBorderWidth,
      description,
    });
    event.preventDefault();
    try {
      api(process.env.NEXT_PUBLIC_API_COURTS as string, {
        method: "post",
        // the sample requestData below can be post
        // requestData: {
        //   name: "Pgy 2",
        //   length: 2800,
        //   width: 1500,
        //   centreCircleRadius: 100,
        //   threePointRadius: 60,
        //   threePointLine: 90,
        //   lengthOfCorner: 290,
        //   restrictedAreaLength: 500,
        //   restrictedAreaWidth: 4900,
        //   sideBorderWidth: 2000,
        //   lineBorderWidth: 50,
        //   description: "hi",
        // },
        // the data below can not be post, response is 400, the reason maybe the axios request is XMLHttpRequest. Bug need to be fixed.
        requestData: {
          name,
          length,
          width,
          centreCircleRadius,
          threePointRadius,
          threePointLine,
          lengthOfCorner,
          restrictedAreaLength,
          restrictedAreaWidth,
          sideBorderWidth,
          lineBorderWidth,
          description,
        },
      });
      router.push("/courts");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Flex flexDirection="column">
        <Heading marginY="50px">Edit Court Information</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around">
            <FormControl width="250px">
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
            </FormControl>
          </Flex>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            gap="20px"
            justifyContent="space-around"
            marginTop="50px"
          >
            <Link href="/courts">
              <Button width="250px">Cancel</Button>
            </Link>

            <Button type="submit" width="250px">
              Save
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default NewCourt;
