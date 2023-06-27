import React from "react";
import Title from "./Title";
import style from "../components/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className={style.Nav}>
      <Title />
      <NavLink to="/">
        <button>Tasks</button>
      </NavLink>
      <NavLink to="/form">
        <button>New Task</button>
      </NavLink>
    </div>
  );
};
export default NavBar;
