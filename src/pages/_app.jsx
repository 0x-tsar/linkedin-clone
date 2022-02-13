import "../../styles/globals.css";
import { Provider } from "../context/context";
import { brightTheme, darkTheme } from "../themes/themes";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
