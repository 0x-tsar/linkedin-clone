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
            // fontFamily: "monospace",
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
    height: 150px;
    background-color: aliceblue;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  `;

  const P = styled.div`
    height: 20px;
  `;

  return (
    <Panel>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "35px",
            backgroundColor: "black",
            margin: "10px",
          }}
        ></div>
        <P style={{ marginRight: "10px" }}>Name Profile </P>
        <P style={{ marginRight: "10px" }}>·</P>
        <P
          style={{
            flexWrap: "wrap", // backgroundColor: "blue",
            // display: "inline-block",
            // width: "calc(100% - 220px)",
            // width: "calc(100% - 120px - 92.92px - 4.44px)",
            backgroundColor: "red",
            marginRight: "10px",
          }}
        >
          3rd+
        </P>
        <P style={{ flexWrap: "wrap" }}>qwew</P>
        {/* <div style={{ width: "60%", marginRight: "10px" }}>
          <p style={{ float: "right", position: "relative" }}>🔹</p>
        </div> */}
      </div>
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
