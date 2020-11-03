import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="main-wrapper">
      <img src={props.profile.photos.large} alt="" />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <span> Полное имя: {props.profile.fullName}</span>
      <div className={classes.profile}>
        <img
          className={classes.profile__photo}
          src={"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}
          alt=""
        />
        <div className={classes.profile_descr}>Описание</div>
      </div>
    </div>
  );
};
