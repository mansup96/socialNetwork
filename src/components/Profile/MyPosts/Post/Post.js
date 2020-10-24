import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  return (
    <div className={classes.item}>
      <div className={classes.imgWrapper}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAL6DToDYadimZn27NfcyFuwWWlf45v-e-ocPLa05Nqc6ay5ing&s"
          alt=""
        />
      </div>
      {props.message}
      <div>Likes: {props.likes}</div>
    </div>
  );
};

export default Post;
