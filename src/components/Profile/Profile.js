import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = (props) => (
    <div className="main-wrapper">
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
);
