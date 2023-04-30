import { ReactNode, ChangeEventHandler } from "react";

import { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: ChangeEventHandler<HTMLInputElement>;
}

interface ThemeContextProps {
  children: ReactNode;
}

const defaultValue: ThemeContextType = {
  theme: "",
  changeTheme: () => {},
};

const Context = createContext(defaultValue);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(() => getDefaultTheme());

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <Context.Provider value={{ theme, changeTheme }}>
      {children}
    </Context.Provider>
  );
}

export { Context as ThemeContext };
