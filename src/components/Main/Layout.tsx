// importing types
import { useContext } from "react";

// importing tools
import { Outlet } from "react-router-dom";

// importing components
import Header from "./Header";

// context
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontContext } from "../../contexts/FontsContext";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { font } = useContext(FontContext);

  return (
    <div className={`layout theme-${theme} font-${font}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
