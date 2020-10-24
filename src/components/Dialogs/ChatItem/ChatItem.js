import React from "react";
import classes from "./ChatItem.module.css";
import { NavLink } from "react-router-dom";

const ChatItem = props => {
  return (
    <div className={classes.chat_item}>
      <NavLink
        activeClassName={classes.active}
        to={"/dialogs/" + props.id}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default ChatItem;
