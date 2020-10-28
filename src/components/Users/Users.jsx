import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/avatar.png";

let Users = props => {
  let pagesCount = Math.ceil(
    props.pageData.totalUsersCount / props.pageData.pageSize
  );

  let pages = [
    props.pageData.currentPage > 2 ? 1 : null,
    props.pageData.currentPage - 1 === 0
      ? null
      : props.pageData.currentPage - 1,
    props.pageData.currentPage,
    props.pageData.currentPage + 1 >= pagesCount
      ? null
      : props.pageData.currentPage + 1,
    props.pageData.currentPage !== pagesCount ? pagesCount : null,
  ];

  const follow = id => {
    props.followUser(id);
  };

  const unfollow = id => {
    props.unfollowUser(id);
  };

  return (
    <div className={classes.users__container}>
      <div className={classes.paginationWrapper}>
        {pages.map(page => {
          return (
            <span
              className={
                page === props.pageData.currentPage ? classes.selectedPage : ""
              }
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.pageData.users.map(user => (
        <div key={user.id} className={classes.users__item}>
          <div className={classes.users__avatar}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                width="100px"
                alt=""
              />
            </NavLink>
            {user.followed ? (
              <button
                disabled={props.pageData.followingIDs.some(u => u === user.id)}
                onClick={() => unfollow(user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.pageData.followingIDs.some(u => u === user.id)}
                onClick={() => follow(user.id)}
              >
                Follow
              </button>
            )}
          </div>
          <div className={classes.users__content}>
            <span>{user.name}</span>
            <span>{"user.location.country"}</span>
            <span>{"user.location.city"}</span>
            <span>{user.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
