import React from "react";
import styled from "styled-components";

export const LeftComp = styled.div`
  grid-area: left;
  background-color: #732fd2;
`;

export const Left = () => {
  return <LeftComp></LeftComp>;
};

export default Left;
