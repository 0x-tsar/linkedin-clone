import "../../styles/globals.css";
import { Provider } from "../context/context";
import { brightTheme, darkTheme } from "../themes/themes";

import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red;
  min-height: fit-content;
  height: min-content; */
`;

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
