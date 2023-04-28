// importing types
import { FC } from "react";

// importing tools
import { NavLink } from "react-router-dom";

// importing assets
import logoIcon from "../assets/logo.svg";
import moonIcon from "../assets/icon-moon.svg";
import searchIcon from "../assets/icon-search.svg";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container container--header">
        <nav className="header__nav">
          <NavLink className="header__logo-container" to="/">
            <img className="header__logo" src={logoIcon} alt="logo icon" />
          </NavLink>
          <div className="header__font-choices">
            <p className="header__font">Sans Serif</p>
            <p className="header__font">Serif</p>
            <p className="header__font">Mono</p>
          </div>
          <div className="header__light-switch-container">
            <label className="header__toggle-label" htmlFor="light-toggle">
              <input
                type="checkbox"
                className="header__toggle-input"
                id="light-toggle"
              />
            </label>
            <img src={moonIcon} alt="moon icon" />
          </div>
        </nav>
        <form className="header__form">
          <input type="text" />
          <img src={searchIcon} alt="search icon" />
        </form>
      </div>
    </header>
  );
};

export default Header;
