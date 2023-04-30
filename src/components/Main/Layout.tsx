// importing types
import { FC, useContext } from "react";

// importing tools
import { Outlet } from "react-router-dom";

// importing components
import Header from "./Header";

// context
import { ThemeContext } from "../../contexts/ThemeContext";

const Layout: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`layout theme-${theme}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
