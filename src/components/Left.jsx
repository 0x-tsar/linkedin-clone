import React from "react";
import styled from "styled-components";
import { brightTheme, darkTheme } from "../themes/themes";

export const LeftComp = styled.div`
  grid-area: left;
  /* margin: 80px 0 0 100px; */
  /* position: fixed; */
  /* left: 0px; */
  /* top: 0; */

  color: ${(props) =>
    props.theme === "bright" ? darkTheme.daker : darkTheme.card};

  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.bg : darkTheme.bg};
`;

export const Panel = styled.div`
  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.card : darkTheme.darker};

  border-radius: 15px;
  width: 350px;
  height: 600px;
  margin: 20px auto;
`;

export const Panel2 = styled.div`
  background-color: ${(props) =>
    props.theme === "bright" ? brightTheme.card : darkTheme.darker};
  border-radius: 15px;
  width: 350px;
  height: 200px;
  margin: 20px auto;
`;

export const Line = styled.div`
  /* background-color: #e6e6e6; */

  width: 100%;
  height: 2px;
  margin: 20px auto;
`;

export const Div = styled.div``;

export const Left = ({ theme, brightTheme, darkTheme }) => {
  return (
    <>
      <LeftComp theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
        <Panel theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
          <Div>
            <div>
              {/* <img src="" alt="" /> */}
              <div
                style={{
                  backgroundColor: "blueviolet",
                  width: "100%",
                  height: "120px",
                  margin: "0 auto",
                  paddingTop: "50px",
                  borderRadius: "15px 15px 0 0",
                  marginBottom: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    margin: "0 auto",
                  }}
                ></div>
              </div>
            </div>
            <h2 style={{ textAlign: "center" }}>Gustavo Fernandes</h2>
            <p
              style={{
                // color: "gray",
                margin: "0 20px",
                fontStyle: "italic",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Solidity developer. Ethereum based networks like 𝘉𝘚𝘊 and 𝘗𝘰𝘭𝘺𝘨𝘰𝘯.
              𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 𝘰𝘧 𝘕𝘍𝘛𝘴, 𝘋𝘦𝘍𝘪, DAOs, ERC20, ERC721, ERC1155, Oracles |
              𝘕𝘰𝘥𝘦, 𝘕𝘦𝘹𝘵𝘑𝘚 𝘢𝘯𝘥 𝘙𝘦𝘢𝘤𝘵.
            </p>
            <Line />
            <div style={{ padding: "0 10px" }}>
              <p style={{ color: "gray", display: "block" }}>
                <b>Connections</b>
                <b
                  style={{
                    float: "right",
                    fontWeight: "500",
                    marginRight: "10px",
                    color: "#0091ff",
                  }}
                >
                  401
                </b>
              </p>

              <b>Grow your network</b>

              <p style={{ color: "gray", display: "block" }}>
                <b>Invitations</b>
                <b
                  style={{
                    float: "right",
                    fontWeight: "500",
                    marginRight: "10px",
                    color: "#0091ff",
                  }}
                >
                  10
                </b>
              </p>
            </div>
            <Line />
            <p
              style={{
                color: "gray",
                margin: "0 10px",
              }}
            >
              Access exclusive tools & insights
            </p>
            <p
              style={{
                color: "gray",
                margin: "10px 10px",
              }}
            >
              <b>🎖 Reactivate Premium: 50% Off</b>
            </p>
            <Line />
            <p
              style={{
                color: "gray",
                margin: "0 10px",
              }}
            >
              <b>📘 My Items</b>
            </p>
          </Div>
        </Panel>
        <Panel2 theme={theme} brightTheme={brightTheme} darkTheme={darkTheme}>
          <p
            style={{
              margin: "10px 40px",
              color: "#0091ff",
              paddingTop: "20px",
            }}
          >
            <b>Groups</b>
          </p>
          <p
            style={{
              margin: "10px 40px",
              color: "#0091ff",
              paddingTop: "10px",
            }}
          >
            <b>Events</b>
            <b style={{ float: "right", cursor: "pointer" }}>➕</b>
          </p>

          <p
            style={{
              margin: "10px 40px",
              color: "#0091ff",
              paddingTop: "10px",
            }}
          >
            <b>Followed Hashtags</b>
          </p>
          <Line />
          <h3 style={{ textAlign: "center", color: "gray", cursor: "pointer" }}>
            Discover More
          </h3>
        </Panel2>
      </LeftComp>
    </>
  );
};

export default Left;
