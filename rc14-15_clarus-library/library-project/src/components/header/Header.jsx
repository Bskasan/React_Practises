import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = ({ setQuery, setSelectType }) => {
  const printType = ["All", "Books", "Magazines"];

  return (
    <HeaderContainer>
      <HeaderTitle>Books Or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput
          type="text"
          placeholder="name"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <SelectBox onChange={(e) => setSelectType(e.target.value)}>
          {printType.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
