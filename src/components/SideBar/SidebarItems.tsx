import { ISidebarItem } from "@/interfaces/sidebarItem";
import { Flex, Box, Icon, Badge, Tooltip, Text } from "@chakra-ui/react";
import Link from "next/link";
import SidebarItemsList from "./SidebarItemsList";

interface Props {
  sidebarExpand: boolean;
}

const SidebarItems = ({ sidebarExpand }: Props) => {
  return (
    <Box as="nav" marginTop="40px">
      {SidebarItemsList.map((sideBarItem: ISidebarItem) => {
        return (
          <Link href={sideBarItem.href} passHref key={sideBarItem.id}>
            <Flex
              padding="10px 5px"
              justifyContent={sidebarExpand ? "space-between" : "center"}
              alignItems="center"
              cursor="pointer"
              _hover={{ backgroundColor: "button.hover", borderRadius: "5px" }}
            >
              {sidebarExpand ? (
                <Flex alignItems="center" color="#FFFFFF">
                  <Icon as={sideBarItem.icon} width="24px" height="24px" marginRight="8px"></Icon>
                  <Text fontWeight="500">{sideBarItem.title}</Text>
                </Flex>
              ) : (
                <Tooltip
                  label={sideBarItem.title}
                  hasArrow
                  placement="right"
                  fontWeight="500"
                  color="#FFFFFF"
                  borderRadius="4px"
                  boxShadow="0px 5.18221px 10.3644px rgba(0, 0, 0, 0.25)"
                >
                  <Flex alignItems="center" position="relative">
                    <Icon as={sideBarItem.icon} width="24px" height="24px" color="#FFFFFF"></Icon>
                    {sideBarItem.badge !== undefined && (
                      <Box
                        position="absolute"
                        top="0"
                        right="0"
                        width="10px"
                        height="10px"
                        backgroundColor="#44BC84"
                        border="1px solid #FFFFFF"
                        borderRadius="50%"
                      ></Box>
                    )}
                  </Flex>
                </Tooltip>
              )}

              {sideBarItem.badge !== undefined && sidebarExpand && (
                <Badge
                  minWidth="20px"
                  height="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  marginLeft="5px"
                  borderRadius="9px"
                  backgroundColor="#44BC84"
                  color="#FFFFFF"
                >
                  {sideBarItem.badge}
                </Badge>
              )}
            </Flex>
          </Link>
        );
      })}
    </Box>
  );
};

export default SidebarItems;
