import { Dispatch, SetStateAction, useRef } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Select,
  Flex,
} from "@chakra-ui/react";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

interface Props {
  searchPlaceholder: string;
  searchFieldSelect: boolean;
  searchField: string;
  setSearchField: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search = ({
  searchPlaceholder,
  searchFieldSelect,
  searchField,
  setSearchField,
  searchValue,
  setSearchValue,
}: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = () => {
    if (searchInputRef.current) {
      setSearchValue(searchInputRef.current.value);
    }
  };

  const handleRemoveSearch = () => {
    setSearchValue("");
  };

  const handleSearchFieldChange = (field: string) => {
    setSearchField(field);
  };

  return (
    <Flex display="flex" gap={2}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="#B6B6B6">
          <HiOutlineSearch />
        </InputLeftElement>
        <Input
          focusBorderColor="#2C4E8A"
          _placeholder={{ color: "#B6B6B6" }}
          placeholder={searchPlaceholder}
          value={searchValue}
          ref={searchInputRef}
          onChange={handleSearchChange}
          data-testid="search-input"
        />
        {searchValue && (
          <InputRightElement onClick={handleRemoveSearch} data-testid="remove-icon">
            <HiOutlineX color="#2C4E8A" />
          </InputRightElement>
        )}
      </InputGroup>
      {searchFieldSelect && (
        <Select
          maxWidth="200px"
          placeholder="By Default"
          value={searchField}
          onChange={(e) => {
            handleSearchFieldChange(e.target.value);
          }}
          data-testid="search-select"
        >
          <option value="user_id">By User ID</option>
          <option value="email">By Email</option>
          <option value="name">By Name</option>
        </Select>
      )}
    </Flex>
  );
};

export default Search;
