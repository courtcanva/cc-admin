import { Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import React from "react";
import { useUpdateCourtMutation } from "../../redux/api/courtsApi";
import { ICourt } from "@/interfaces/courtData";
interface Props {
  court: ICourt;
}

const SwitchButton = ({ court }: Props) => {
  const [updateCourt] = useUpdateCourtMutation();

  const handSwitchBtnState = () => {
    updateCourt({ ...court, isHidden: !court.isHidden });
  };

  return (
    <Flex marginRight="2" justifyContent="center">
      <FormControl display="flex" w="80px" alignItems="center">
        <FormLabel
          htmlFor="switch-btn-label"
          marginBottom="0"
          color="brand.primary"
          data-testid="switch-label"
          width={{ base: "60px", lg: "70px" }}
          height="40px"
          fontSize={{ base: "xs", lg: "sm" }}
          fontWeight="500"
          paddingTop="9px"
        >
          {court.isHidden ? "OFF" : "ON"}
        </FormLabel>
        <Switch
          id="ruler-switch-btn"
          colorScheme="footerSwitch"
          size="lg"
          sx={{
            "span.chakra-switch__track": {
              width: "40px",
              height: "18px",
            },
            "span .chakra-switch__thumb": {
              bgColor: "background.tertiary",
              width: "18px",
              height: "18px",
            },
            "span.chakra-switch__track[data-focus]": {
              boxShadow: "none",
            },
          }}
          isChecked={court.isHidden ? false : true}
          data-testid="switch-btn"
          onChange={handSwitchBtnState}
        />
      </FormControl>
    </Flex>
  );
};

export default SwitchButton;
