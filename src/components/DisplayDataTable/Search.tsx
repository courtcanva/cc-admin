import { Dispatch, SetStateAction, useRef } from "react";
import { InputGroup, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

interface Props {
  searchPlaceholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchPlaceholder, searchValue, setSearchValue }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = () => {
    if (searchInputRef.current) {
      setSearchValue(searchInputRef.current.value);
    }
  };

  const handleRemoveSearch = () => {
    setSearchValue("");
  };

  return (
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
  );
};

export default Search;
