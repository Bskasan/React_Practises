import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Books Or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput type="text" placeholder="name" required />
        <SelectBox>
          <option>All</option>
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
