import { ReactNode } from "react";

import { createContext, useState } from "react";

interface FontContextType {
  font: string;
  changeFont: (value: string) => void;
}

interface FontContextProps {
  children: ReactNode;
}

const defaultValue: FontContextType = {
  font: "",
  changeFont: () => {},
};

const Context = createContext(defaultValue);

export function FontContextProvider({ children }: FontContextProps) {
  const getDefaultFont = () => {
    return localStorage.getItem("font") || "sans-serif";
  };

  const [font, setFont] = useState(() => getDefaultFont());
  console.log(font);

  const changeFont = (specified_font: string) => {
    setFont((_) => {
      localStorage.setItem("font", specified_font);
      return specified_font;
    });
  };

  return (
    <Context.Provider value={{ font, changeFont }}>{children}</Context.Provider>
  );
}

export { Context as FontContext };
