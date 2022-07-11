
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link } from "@chakra-ui/react";

const NewCourt = () => {
  
  const requestDataList = {
    "Name": "name",
    "Length": "length",
    "Width": "width",
    "Centre Circle Radius": "centreCircleRadius",
    "Three Point Radius": "threePointRadius",
    "Three Point Line": "threePointLine",
    "Length Of Corner": "lengthOfCorner",
    "Restricted AreaLength": "restrictedAreaLength",
    "Restricted AreaWidth": "restrictedAreaWidth",
    "SideBorder Width": "sideBorderWidth",
    "LineBorder Width": "lineBorderWidth",
    "Description": "description",
  }
  return (
    <Container>
    <Flex flexDirection="column">
      <Heading marginY="50px">Add New Court</Heading>
      <form >
        <Flex flexDirection="row" flexWrap="wrap" gap="20px" justifyContent="space-around">
          {Object.entries(requestDataList).map(([title, refer]) => {
            return (
              <FormControl key={refer} width="250px">
              <FormLabel htmlFor={refer}>{title}</FormLabel>
              <Input
                placeholder={title}
                id={refer}
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

export default NewCourt