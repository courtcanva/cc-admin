import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./sideBarItemList";
const SideBarItem: any = () => {
  return sideBarItemList.map((e) => {
    return (
      <Box
        key={e.id}
        width="full"
        borderBottom="1px"
        padding="15px 0px"
        _hover={{ bg: "button.hover" }}
        color="fontcolor.primary"
      >
        <Icon w="32px" h="32px" viewBox="0 0 20 20" paddingRight="5px">
          {e.icon}
        </Icon>
        <Link href={e.href}>
          <a>{e.title}</a>
        </Link>
      </Box>
    );
  });
};

export default SideBarItem;
