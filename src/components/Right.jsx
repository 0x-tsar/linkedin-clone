import React from "react";
import styled from "styled-components";
import { brightTheme, darkTheme } from "../themes/themes";

export const RightComp = styled.div`
  grid-area: right;
  /* background-color: #e6e6e6; */
  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.bg : darkTheme.bg};
`;

export const Panel = styled.div`
  color: ${(props) =>
    props.theme === "bright" ? darkTheme.text : brightTheme.text};
  //
  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.card : darkTheme.card};
  border-radius: 15px;
  width: 350px;
  height: 450px;
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  border: ${(props) =>
    props.theme === "bright"
      ? `1px solid ${brightTheme.border}`
      : `1px solid ${darkTheme.border}`};
  margin: 20px auto;
`;

export const Panel2 = styled.div`
  color: ${(props) =>
    props.theme === "bright" ? darkTheme.text : brightTheme.text};
  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.card : darkTheme.card};
  border-radius: 15px;
  width: 350px;
  height: 200px;
  border: ${(props) =>
    props.theme === "bright"
      ? `1px solid ${brightTheme.border}`
      : `1px solid ${darkTheme.border}`};
  margin: 20px auto;
`;

export const Panel3 = styled.div`
  color: ${(props) =>
    props.theme === "bright" ? brightTheme.text : darkTheme.text};
  border-radius: 15px;
  width: 350px;
  height: 100px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  p {
    margin: 5px 0;
    /* padding: 0; */
    margin-right: 10px;
  }
`;

export const Item = styled.div`
  width: calc(100% - 20px);
  height: 100px;
  margin: 0;
  margin-top: 10px;
  display: flex;

  .bt {
    color: gray;
    :hover {
      color: white;
      background-color: #9500ff;
    }
  }
`;

export const ItemComponent = () => {
  return (
    <Item>
      <div
        style={{
          width: "50px",
          height: "50px",
          margin: "20px 0",
          marginRight: "10px",
          backgroundColor: "black",
          borderRadius: "25px",
        }}
      ></div>
      <div>
        <p
          style={{
            marginBottom: 0,
            fontSize: "14px",
          }}
        >
          Name
        </p>
        <p
          style={{
            marginBottom: 0,
            fontSize: "14px",
            marginTop: "5px",
            fontWeight: 400,
          }}
        >
          Company • Financial Services
        </p>
        <div
          style={{
            width: "100px",
            height: "40px",
            borderRadius: "20px",
            border: "1px solid rgb(0,0,0,0.2)",
            marginTop: "10px",
            textAlign: "center",
            paddingTop: "6px",
            cursor: "pointer",
          }}
          className="bt"
        >
          + Follow
        </div>
      </div>
    </Item>
  );
};

export const Right = ({ theme, brightTheme, darkTheme }) => {
  return (
    <RightComp theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
      <Panel theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
        <h3 style={{ marginLeft: "20px", marginBottom: "20px" }}>
          Add to your feed
          <p
            style={{
              float: "right",
              padding: "0px",
              margin: "0px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            ℹ️
          </p>
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
        </h3>

        <h3
          style={{
            fontWeight: "400",
            margin: "20px",
          }}
        >
          View all recommendations ➡
        </h3>
      </Panel>
      <Panel2
        theme={theme}
        brightTheme={brightTheme}
        darkTheme={darkTheme}
      ></Panel2>
      <Panel3 theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Privacy & Terms ⌄</p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p>Busines Services ⌄</p>
      </Panel3>
    </RightComp>
  );
};

export default Right;
