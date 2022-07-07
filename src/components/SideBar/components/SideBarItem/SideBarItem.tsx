import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./sideBarItemList";
const SideBarItem: any = () => {
  return sideBarItemList.map((e) => {
    return (
      <Link key={e.id} href={e.href}>
      <Box
        width="full"
        borderBottom="1px"
        padding="15px 0px"
        _hover={{ bg: "button.hover" }}
        color="fontcolor.primary"
      >
        <Icon w="32px" h="32px" viewBox="0 0 20 20" paddingRight="5px">
          {e.icon}
        </Icon>
          <a>{e.title}</a>
      </Box>
      </Link>
    );
  });
};

export default SideBarItem;
