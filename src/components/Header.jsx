import React from "react";
import styled from "styled-components";

export const HeaderComp = styled.div`
  grid-area: header;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Header = () => {
  return <HeaderComp></HeaderComp>;
};

export default Header;
