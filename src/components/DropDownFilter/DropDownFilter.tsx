import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  IconButton,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useCheckboxGroup } from "@chakra-ui/react";
interface PropsType {
  handleValueChange: (value: any) => void;
}

const FILTER_VALUES: string[] = ["active", "deleted"];

const DropDownFilter = ({ handleValueChange }: PropsType) => {
  const { value, setValue } = useCheckboxGroup({
    defaultValue: FILTER_VALUES,
  });

  useEffect(() => {
    handleValueChange({
      isActive: value.includes("active"),
      isDelete: value.includes("deleted"),
    });
  }, [value]);

  return (
    <Flex alignItems="center" gap={2}>
      <Text fontSize="md" color="teal.500">
        User Types
      </Text>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<ChevronDownIcon />}
          variant="outline"
          size="xs"
        />

        <MenuList paddingLeft={5}>
          <Checkbox
            colorScheme="teal"
            isChecked={FILTER_VALUES.length === value.length}
            isIndeterminate={FILTER_VALUES.length !== value.length && value.length > 0}
            onChange={(e) => (e.target.checked ? setValue(FILTER_VALUES) : setValue([]))}
            paddingBottom={2}
          >
            All
          </Checkbox>
          <CheckboxGroup colorScheme="teal" value={value} onChange={(value) => setValue(value)}>
            <Stack pl={6} direction={["column"]}>
              <Checkbox value="active">Active User</Checkbox>
              <Checkbox value="deleted">Deleted User</Checkbox>
            </Stack>
          </CheckboxGroup>
        </MenuList>
      </Menu>
      <Text fontSize="md" color="teal.500">
        {!value ? null : `Selected: ${value.toString()}`}
      </Text>
    </Flex>
  );
};

export default DropDownFilter;
