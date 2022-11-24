import { Dispatch, SetStateAction } from "react";
import { Text, Flex, Image, Icon, Tooltip } from "@chakra-ui/react";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

interface Props {
  sidebarExpand: boolean;
  setSidebarExpand: Dispatch<SetStateAction<boolean>>;
}

const Logo = ({ sidebarExpand, setSidebarExpand }: Props) => {
  return (
    <Flex justifyContent={sidebarExpand ? "space-between" : "center"}>
      {sidebarExpand && (
        <Flex alignItems="center">
          <Image src="/dashboard-logo-192x192.png" boxSize="48px" />
          <Text color="#FFFFFF" fontSize="20px" fontWeight="700" marginLeft="8px">
            CourtCanva
          </Text>
        </Flex>
      )}
      <Tooltip
        label={sidebarExpand ? "Hide sidebar" : "Show sidebar"}
        hasArrow
        placement="right"
        color="#FFFFFF"
        fontWeight="500"
        borderRadius="4px"
        boxShadow="0px 5.18221px 10.3644px rgba(0, 0, 0, 0.25)"
      >
        <Flex alignItems="center">
          <Icon
            as={sidebarExpand ? TbLayoutSidebarLeftCollapse : TbLayoutSidebarLeftExpand}
            width="24px"
            height="24px"
            fontSize="20px"
            color="#FFFFFF"
            cursor="pointer"
            onClick={() => {
              setSidebarExpand(!sidebarExpand);
            }}
            data-testid="toggle-icon"
          />
        </Flex>
      </Tooltip>
    </Flex>
  );
};

export default Logo;
