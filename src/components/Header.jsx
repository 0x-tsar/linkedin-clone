/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/context";
import { darkTheme } from "../themes/themes";

export const HeaderComp = styled.div`
  grid-area: header;
  position: fixed;
  width: 100vw;

  background-color: ${(props) =>
    props.theme === "bright" ? "white" : darkTheme.darker};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 30px;
  display: flex;
  align-items: center;
  z-index: 99;

  button {
    cursor: pointer;
  }
`;

export const Panel = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 100px;
`;

export const ItemPanel = styled.div`
  /* background-color: #0000003f; */
  width: 100px;
  margin-left: 10px;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5px;

  * {
    margin: 0 auto;
  }
`;

const EachItem = ({ item, isActive, isProfile }) => {
  //
  const flag = (active) => {
    if (active) {
      return "block";
    } else {
      return "none";
    }
  };

  if (isProfile) {
    return (
      <ItemPanel>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "gold",
          }}
        ></div>
        <p style={{ marginTop: "2px" }}>{item} </p>
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "black",
            marginTop: "10px",
            display: flag(isActive),
          }}
        ></div>
      </ItemPanel>
    );
  } else {
    return (
      <ItemPanel>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgba(0,0,0,.2)",
          }}
        ></div>
        <p style={{ marginTop: "12px" }}>{item}</p>
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "black",
            marginTop: "10px",
            display: flag(isActive),
          }}
        ></div>
      </ItemPanel>
    );
  }
};

export const Header = ({ themeColor, brightTheme, darkTheme }) => {
  const [state, setState] = useState("🌜 Dark");
  const { theme, setTheme } = useContext(Context);
  const [whichTab, setWhichTab] = useState(0);

  return (
    <HeaderComp
      theme={themeColor}
      brightTheme={brightTheme}
      darkTheme={darkTheme}
    >
      <button
        style={{
          padding: "10px",
          fontSize: "20px",
          position: "absolute",
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
      <img
        style={{ marginLeft: "200px" }}
        src="./in.png"
        alt="linkedin-logo"
        width={50}
      />
      <input
        type="text"
        style={{ padding: "10px", marginLeft: "10px", fontSize: "20px" }}
        placeholder="Search.."
      />
      <Panel>
        <EachItem item={"Home"} isActive={true}></EachItem>
        <EachItem item={"My Network"} isActive={false}></EachItem>
        <EachItem item={"Jobs"} isActive={false}></EachItem>
        <EachItem item={"Messaging"} isActive={false}></EachItem>
        <EachItem item={"Notifications"} isActive={false}></EachItem>
        <EachItem item={"Me"} isProfile={true} isActive={false}></EachItem>
      </Panel>
    </HeaderComp>
  );
};

export default Header;
