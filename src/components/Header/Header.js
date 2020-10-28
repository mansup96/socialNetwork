import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
        alt=""
      />
      <div className={classes.login}>
        {props.credentials ? (
          props.credentials.login
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};
