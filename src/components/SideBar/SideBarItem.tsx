import { ISideBarItem } from "@/interfaces/navigationItem";
import { Flex, Box, Icon, Badge } from "@chakra-ui/react";
import Link from "next/link";
import sideBarItemList from "./components/SideBarItem/sideBarItemList";

const SideBarItem = () => {
  return (
    <Box marginTop="40px">
      {sideBarItemList.map((sideBarItem: ISideBarItem) => {
        return (
          <Flex
            key={sideBarItem.id}
            padding="10px 5px"
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
            _hover={{ bg: "button.hover" }}
          >
            <Link href={sideBarItem.href} passHref>
              <Flex alignItems="center" fontSize="16px" fontWeight="500" color="#FFFFFF">
                <Icon as={sideBarItem.icon} width="24px" height="24px" marginRight="8px"></Icon>
                <a>{sideBarItem.title}</a>
              </Flex>
            </Link>
            {sideBarItem.badge !== undefined && (
              <Badge
                minWidth="20px"
                height="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="5px"
                borderRadius="9px"
                backgroundColor="#2C4E8A"
                color="#FFFFFF"
              >
                {sideBarItem.badge}
              </Badge>
            )}
          </Flex>
        );
      })}
    </Box>
  );
};

export default SideBarItem;
