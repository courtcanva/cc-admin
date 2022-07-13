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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICourt } from "@/interfaces/courtData";
import { routeHandler } from "@/utils/routeHandler";

const EditCourt = () => {
  const router = useRouter();
  const CourtId = router.query.courtID;
  const [courtData, setCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState<boolean>(true);
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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_COURTS}/${CourtId}`;

  useEffect(() => {
    api(apiUrl, { method: "get" }).then(({ data }) => {
      setCourtData(data);
      setName(data.name);
      setLength(data.length);
      setWidth(data.width);
      setCentreCircleRadius(data.centreCircleRadius);
      setThreePointRadius(data.threePointRadius);
      setThreePointLine(data.threePointLine);
      setLengthOfCorner(data.lengthOfCorner);
      setRestrictedAreaLength(data.restrictedAreaLength);
      setRestrictedAreaWidth(data.restrictedAreaWidth);
      setSideBorderWidth(data.sideBorderWidth);
      setLineBorderWidth(data.lineBorderWidth);
      setDescription(data.description);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      api(apiUrl, {
        method: "put",
        requestData: {
          ...courtData,
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
      routeHandler();
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
              <Input
                id="name"
                placeholder={courtData?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="length">Length</FormLabel>
              <Input
                id="length"
                placeholder={courtData?.length?.toString()}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="width">Width</FormLabel>
              <Input
                id="width"
                placeholder={courtData?.width?.toString()}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="centreCircleRadius">Centre Circle Radius</FormLabel>
              <Input
                id="centreCircleRadius"
                placeholder={courtData?.centreCircleRadius?.toString()}
                onChange={(e) => setCentreCircleRadius(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="threePointRadius">Three Point Radius</FormLabel>
              <Input
                id="threePointRadius"
                placeholder={courtData?.threePointRadius?.toString()}
                onChange={(e) => setThreePointRadius(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="lengthOfCorner">LengthOfCorner</FormLabel>
              <Input
                id="lengthOfCorner"
                placeholder={courtData?.lengthOfCorner?.toString()}
                onChange={(e) => setLengthOfCorner(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="threePointLine">Three Point Line</FormLabel>
              <Input
                id="threePointLine"
                placeholder={courtData?.threePointLine?.toString()}
                onChange={(e) => setThreePointLine(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="restrictedAreaLength">Restricted Area Length</FormLabel>
              <Input
                id="restrictedAreaLength"
                placeholder={courtData?.restrictedAreaLength?.toString()}
                onChange={(e) => setRestrictedAreaLength(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="restrictedAreaWidth">Restricted Area Width</FormLabel>
              <Input
                id="restrictedAreaWidth"
                placeholder={courtData?.restrictedAreaWidth?.toString()}
                onChange={(e) => setRestrictedAreaWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="sideBorderWidth">Side Border Width</FormLabel>
              <Input
                id="sideBorderWidth"
                placeholder={courtData?.sideBorderWidth?.toString()}
                onChange={(e) => setSideBorderWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="lineBorderWidth">Line Border Width</FormLabel>
              <Input
                id="lineBorderWidth"
                placeholder={courtData?.lineBorderWidth?.toString()}
                onChange={(e) => setLineBorderWidth(Number(e.target.value))}
              />
            </FormControl>
            <FormControl width="250px">
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                placeholder={courtData?.description?.toString()}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
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
              onClick={() => routeHandler()}
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

export default EditCourt;
