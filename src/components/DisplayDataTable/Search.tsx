import { Dispatch, SetStateAction } from "react";
import { InputGroup, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

interface Props {
  searchPlaceholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchPlaceholder, searchValue, setSearchValue }: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRemoveSearch = () => {
    setSearchValue("");
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="#B6B6B6" children={<HiOutlineSearch />} />
      <Input
        focusBorderColor="#2C4E8A"
        _placeholder={{ color: "#B6B6B6" }}
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={handleSearchChange}
        data-testid="search-input"
      />
      {searchValue.length !== 0 && (
        <InputRightElement
          children={<HiOutlineX color="#2C4E8A" />}
          onClick={handleRemoveSearch}
          data-testid="remove-icon"
        />
      )}
    </InputGroup>
  );
};

export default Search;
