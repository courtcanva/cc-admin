import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import SideBarItem from "./components/SideBarItem";

const SideBar = () => {
  return (
    <Box background="background.primary" width="300px" height="100vh" position="fixed" left="0">
      <Grid
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
      </Grid>
    </Box>
  );
};

export default SideBar;
