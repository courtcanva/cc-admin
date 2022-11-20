import { ISideBarItem } from "@/interfaces/navigationItem";
import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./components/SideBarItem/sideBarItemList";

const SideBarItem = () => {
  return (
    <Box marginTop="40px">
      {sideBarItemList.map((sideBarItem: ISideBarItem) => {
        return (
          <Link key={sideBarItem.id} href={sideBarItem.href} passHref>
            <Box
              width="full"
              padding="10px 0px"
              fontSize="16px"
              fontWeight="500"
              color="#FFFFFF"
              cursor="pointer"
              _hover={{ bg: "button.hover" }}
            >
              <Icon w="32px" h="32px" viewBox="0 0 20 20" paddingRight="8px">
                {sideBarItem.icon}
              </Icon>
              <a>{sideBarItem.title}</a>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default SideBarItem;
