import React from "react";
import "./NavItem.scss";
import { NavLink } from "react-router-dom";

const NavItem = ({ title, link }) => {
  return (
    <div className="navitem">
      <NavLink
        activeClassName="active"
        className="navitem__link"
        to={`${link}`}
      >
        <span>{title}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
