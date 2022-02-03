import React from "react";
import styled from "styled-components";

export const HeaderComp = styled.div`
  grid-area: header;
  background-color: #d2a92f;
`;

export const Header = () => {
  return <HeaderComp></HeaderComp>;
};

export default Header;
