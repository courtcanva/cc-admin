import { Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
interface Props {
  initialState: boolean;
  switchBtnHandler: () => void;
}

const SwitchButton = ({ initialState, switchBtnHandler }: Props) => {
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
          {!initialState ? "OFF" : "ON"}
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
          isChecked={initialState}
          data-testid="switch-btn"
          onChange={switchBtnHandler}
        />
      </FormControl>
    </Flex>
  );
};

export default SwitchButton;
