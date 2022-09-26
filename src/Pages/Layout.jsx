import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import image from "../../Inspire-Color.svg";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={image} alt="logo__image" className="logo__image" />
        </div>
        <ul className="nav__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " link  active__link" : "link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? " link  active__link" : "link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
