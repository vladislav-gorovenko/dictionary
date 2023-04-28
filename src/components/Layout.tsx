// importing types
import { FC } from "react";

// importing tools
import { Outlet } from "react-router-dom";

// importing components
import Header from "./Header";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <h1>Hello, world</h1>
      <Outlet />
    </>
  );
};

export default Layout;
