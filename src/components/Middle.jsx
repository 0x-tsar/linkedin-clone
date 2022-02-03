import React from "react";
import styled from "styled-components";

export const MiddleComp = styled.div`
  grid-area: middle;
  background-color: #e6e6e6;
`;

export const Middle = () => {
  return <MiddleComp></MiddleComp>;
};

export default Middle;
