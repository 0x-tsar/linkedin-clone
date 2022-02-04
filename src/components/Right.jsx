import React from "react";
import styled from "styled-components";

export const RightComp = styled.div`
  grid-area: right;
  background-color: #e6e6e6;
`;

export const Panel = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 350px;
  height: 450px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

export const Panel2 = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 350px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

export const Panel3 = styled.div`
  border-radius: 15px;
  width: 350px;
  height: 100px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  color: #959595;
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
        <p style={{ marginBottom: 0, color: "gray", fontSize: "14px" }}>Name</p>
        <p
          style={{
            marginBottom: 0,
            color: "gray",
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

export const Right = () => {
  return (
    <RightComp>
      <Panel>
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

        <h3 style={{ color: "gray", fontWeight: "400", margin: "20px" }}>
          View all recommendations ➡
        </h3>
      </Panel>
      <Panel2></Panel2>
      <Panel3>
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
