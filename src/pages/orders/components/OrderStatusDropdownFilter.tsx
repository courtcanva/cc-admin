import { Menu, MenuButton, MenuList, Stack, IconButton, Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useCheckboxGroup } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

interface FilterType {
  isUnpaid: boolean;
  isProcessing: boolean;
  isCompleted: boolean;
  isCancelled: boolean;
}

interface PropsType {
  handleValueChange: (value: FilterType) => void;
}

const FILTER_VALUES: string[] = ["unpaid", "processing", "completed", "cancelled"];

const OrderStatusDropdownFilter = ({ handleValueChange }: PropsType) => {
  const { value, setValue } = useCheckboxGroup({
    defaultValue: FILTER_VALUES,
  });

  useEffect(() => {
    handleValueChange({
      isUnpaid: value.includes("unpaid"),
      isProcessing: value.includes("processing"),
      isCompleted: value.includes("completed"),
      isCancelled: value.includes("cancelled"),
    });
  }, [value]);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Order Status"
        icon={<RiArrowDownSLine />}
        variant="outline"
        size="xs"
      />

      <MenuList>
        <Flex flexDirection="column" padding="10px">
          <Checkbox
            colorScheme="cyan"
            isChecked={FILTER_VALUES.length === value.length}
            isIndeterminate={FILTER_VALUES.length !== value.length && value.length > 0}
            onChange={(e) => (e.target.checked ? setValue(FILTER_VALUES) : setValue([]))}
            paddingBottom={2}
          >
            All
          </Checkbox>
          <CheckboxGroup colorScheme="cyan" value={value} onChange={(value) => setValue(value)}>
            <Stack direction="column" paddingLeft="10px">
              <Checkbox value="unpaid">unpaid</Checkbox>
              <Checkbox value="processing">processing</Checkbox>
              <Checkbox value="completed">completed</Checkbox>
              <Checkbox value="cancelled">cancelled</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default OrderStatusDropdownFilter;
