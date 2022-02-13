import React from "react";
import styled from "styled-components";
import { brightTheme, darkTheme } from "../themes/themes";

export const MiddleComp = styled.div`
  grid-area: middle;
  background-color: ${(props) =>
    props.theme === "bright" ? props.brightTheme.bg : props.darkTheme.bg};
`;

export const PostSomething = () => {
  //
  const Panel = styled.div`
    height: 150px;
    background-color: aliceblue;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  `;

  return (
    <Panel>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "35px",
            backgroundColor: "black",
            margin: "10px",
          }}
        ></div>
        <input
          type="text"
          style={{
            width: "90%",
            height: "70px",
            borderRadius: "50px",
            margin: "10px",
            outline: "none",
            border: "1px solid rgba(0,0,0,0.2)",
            fontSize: "20px",
            padding: "10px 20px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "gray",
          fontSize: "23px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        <div>📸 Photo</div>
        <div>📽 Video</div>
        <div>📆 Event</div>
        <div>📰 Write Article</div>
      </div>
    </Panel>
  );
};

export const PostNormal = () => {
  const Panel = styled.div`
    height: 900px;
    background-color: aliceblue;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  `;

  // const P = styled.div`
  //   height: 20px;
  // `;

  const Holder = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "one"
      "two"
      "three";

    margin: 0 0 30px 0;
  `;

  const One = styled.div`
    grid-area: one;
    background-color: yellow;
  `;

  const Two = styled.div`
    grid-area: two;
    background-color: purple;
  `;

  const Three = styled.div`
    grid-area: three;
    background-color: green;
  `;

  return (
    <Panel>
      <Holder>
        <One></One>
        <Two></Two>
        <Three></Three>
      </Holder>
      <Holder>
        <One></One>
        <Two></Two>
        <Three></Three>
      </Holder>
    </Panel>
  );
};
export const Middle = ({ theme, darkTheme, brightTheme }) => {
  return (
    <MiddleComp theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
      <PostSomething
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></PostSomething>
      <PostNormal
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></PostNormal>
    </MiddleComp>
  );
};

export default Middle;
