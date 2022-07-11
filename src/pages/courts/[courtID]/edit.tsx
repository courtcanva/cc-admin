
import { api } from "@/utils/axios";
import { Text, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {ICourt} from "@/interfaces/courtData";

const EditCourt = () => {
  const router = useRouter();
  const CourtId= router.query.courtID;
  const [courtData, setCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_API_COURTS}/${CourtId}`;
  let requestDataList = {};
  useEffect(() => {
    api(apiUrl, { method: "get" }).then(({ data }) => {
      setCourtData(data);
      setLoading(false);
    });
  }, []);
  console.log(courtData)
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if(courtData){
    requestDataList = {
      name: {
        title: "Name",
        defaultValue: courtData.name
      },
      length: {
        title: "Length",
        defaultValue: courtData.length
      },
      width: {
        title: "Width",
        defaultValue: courtData.width
      },
      centreCircleRadius: {
        title: "Centre Circle Radius",
        defaultValue: courtData.centreCircleRadius
      },
      threePointRadius: {
        title: "Three Point Radius",
        defaultValue: courtData.threePointRadius
      },
      lengthOfCorner: {
        title: "Length Of Corner",
        defaultValue: courtData.lengthOfCorner
      },
      restrictedAreaLength:{
        title: "Restricted Area Length",
        defaultValue: courtData.restrictedAreaLength
      },
      sideBorderWidth:{
        title: "Side Border Width",
        defaultValue: courtData.sideBorderWidth
      },
      lineBorderWidth: {
        title: "Line Border Width",
        defaultValue: courtData.lineBorderWidth
      },
      description: {
        title: "Description",
        defaultValue: courtData.description
      },
    }
  }
   
  return (
    <Container>
    <Flex flexDirection="column">
      <Heading marginY="50px">Edit Court Information</Heading>
      <form >
        <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around">
          {Object.entries(requestDataList).map(([key, value]) => {
            return (
              <FormControl key={key} width="250px">
              <FormLabel htmlFor={key}>{value.title}</FormLabel>
              <Input
                placeholder={value.defaultValue}
                id={key}
              />
            </FormControl>
            )
          })}
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around" marginTop="50px">
          <Link href="/courts" >
            <Button width="250px">
              Cancel
            </Button>
          </Link>

          <Button type="submit" width="250px">
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
    </Container>
  )
}

export default EditCourt