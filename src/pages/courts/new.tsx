import { Container, Flex, Heading } from "@chakra-ui/react";
import CourtForm from "@/components/CourtsForm";
import { ICourt } from "@/interfaces/courtData";

const NewCourt: React.FC = () => {
  const defaultCourtData = {
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
  } as ICourt;
  const API = process.env.NEXT_PUBLIC_API_COURTS as string;
  return (
    <Container>
      <Flex flexDirection="column">
        <Heading marginY="50px">Add New Court</Heading>
        <CourtForm courtData={defaultCourtData} API={API} method="post" />
      </Flex>
    </Container>
  );
};

export default NewCourt;
