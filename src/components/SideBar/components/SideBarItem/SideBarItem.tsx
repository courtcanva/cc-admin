import { ISideBarItem } from "@/interfaces/navigationItem";
import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./sideBarItemList";

const SideBarItem = () => {
  return (
    <>
      {sideBarItemList.map((sideBarItem: ISideBarItem) => {
        return (
          <Link key={sideBarItem.id} href={sideBarItem.href} passHref>
            <Box
              width="full"
              borderBottom="1px"
              padding="15px 0px"
              _hover={{ bg: "button.hover" }}
              color="fontcolor.primary"
            >
              <Icon w="32px" h="32px" viewBox="0 0 20 20" paddingRight="5px">
                {sideBarItem.icon}
              </Icon>
              <a>{sideBarItem.title}</a>
            </Box>
          </Link>
        );
      })}
    </>
  );
};

export default SideBarItem;
