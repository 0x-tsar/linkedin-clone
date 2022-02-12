import React from "react";
import styled from "styled-components";

export const MiddleComp = styled.div`
  grid-area: middle;
  background-color: #e6e6e6;
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
            backgroundColor: "black",
            margin: "10px",
            outline: "none",
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
        <p style={{ marginRight: "10px" }}>Name Profile </p>
        <p style={{ marginRight: "10px" }}>·</p>
        <p
          style={{
            // backgroundColor: "blue",
            marginRight: "10px",
          }}
        >
          3rd+
        </p>
        {/* <div style={{ width: "60%", marginRight: "10px" }}>
          <p style={{ float: "right", position: "relative" }}>🔹</p>
        </div> */}
        <p>qweq</p>
      </div>
    </Panel>
  );
};
export const Middle = () => {
  return (
    <MiddleComp>
      <PostSomething></PostSomething>
      <PostNormal></PostNormal>
    </MiddleComp>
  );
};

export default Middle;
