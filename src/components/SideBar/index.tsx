import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import Logo from "./Logo";
import Profile from "./Profile";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <Flex
      position="fixed"
      left="0"
      width="220px"
      height="100vh"
      padding="30px 16px"
      flexDirection="column"
      justifyContent="space-between"
      background="#4A4A4A"
    >
      <Box>
        <Logo />
        <SideBarItem />
      </Box>

      <Profile />

      {/* <Grid
        templateAreas={`"logo"
                  "sideBarItem"
                  "divider"
                  " Profile"`}
        gridTemplateRows={"10vh 70vh 2vh"}
        fontWeight="bold"
        margin="20px"
      >
        <GridItem pl="2" area={"logo"}>
          <Logo />
        </GridItem>
        <GridItem pl="2" area={"sideBarItem"}>
          <SideBarItem />
        </GridItem>
        <GridItem pl="2" area={"divider"}>
          <Divider />
        </GridItem>
        <GridItem pl="2" area={"Profile"}>
          <Profile />
        </GridItem>
      </Grid> */}
    </Flex>
  );
};

export default SideBar;
