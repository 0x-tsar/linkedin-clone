import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/context";

export const HeaderComp = styled.div`
  grid-area: header;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 30px;
  display: flex;
  align-items: center;
  z-index: 99;

  button {
    cursor: pointer;
  }
`;

export const Header = () => {
  const [state, setState] = useState("🌜 Dark");
  const { theme, setTheme } = useContext(Context);

  return (
    <HeaderComp>
      <button
        style={{
          padding: "10px",
          fontSize: "20px",
        }}
        onClick={(e) => {
          if (state.includes("🌜 Dark")) {
            setTheme("dark");
            setState("🌞 Bright");
          } else {
            setTheme("bright");
            setState("🌜 Dark");
          }
        }}
      >
        {state}
      </button>
    </HeaderComp>
  );
};

export default Header;
