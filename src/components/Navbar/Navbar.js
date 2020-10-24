import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = props => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink activeClassName={classes.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink activeClassName={classes.active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink activeClassName={classes.active} to="/users">
            Users
          </NavLink>
        </li>
        <li className={classes.item}>
          <a>News</a>
        </li>
        <li className={classes.item}>
          <a>Music</a>
        </li>
        <li className={classes.item}>
          <a>Settings</a>
        </li>
      </ul>
      <span>Friends</span>
      {/* <div className={classes.navbar__friends}>
        {props.store.getState().navBar.friendsData.map(friend => {
          return (
            <div className={classes.navbar__friends_item}>
              <img src={friend.avatar} alt="" />
              <span>{friend.name}</span>
            </div>
          );
        })}
      </div> */}
    </nav>
  );
};
