import { createContext, useState } from "react";

export const Context = createContext({});

export function Provider(props) {
  const [theme, setTheme] = useState("bright");

  return (
    <Context.Provider value={{ theme, setTheme }}>
      {props.children}
    </Context.Provider>
  );
}
