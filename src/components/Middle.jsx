import React from "react";
import styled from "styled-components";

export const MiddleComp = styled.div`
  grid-area: middle;
  background-color: #58d22f;
`;

export const Middle = () => {
  return <MiddleComp></MiddleComp>;
};

export default Middle;
