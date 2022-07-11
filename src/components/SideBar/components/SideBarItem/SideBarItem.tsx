import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./sideBarItemList";
const SideBarItem: any = () => {
  return sideBarItemList.map((item) => {
    return (
      <Link href={item.href} key={item.id}>
        <Box
          width="full"
          borderBottom="1px"
          padding="15px 0px"
          _hover={{ bg: "button.hover" }}
          color="fontcolor.primary"
        >
          <Icon w="32px" h="32px" viewBox="0 0 20 20" paddingRight="5px">
            {item.icon}
          </Icon>
          {item.title}
        </Box>
      </Link>
    );
  });
};

export default SideBarItem;
