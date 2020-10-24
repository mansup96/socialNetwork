import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export const MyPosts = props => {
    let postsElements = props.profilePage.postsData.map((elem, i) => (
        <Post key={i} message={elem.post} likes={elem.likesCount}/>
    ));
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onInputChange = () => {
        let text = newPostElement.current.value;
        props.changeInputValue(text);
    };

    return (
        <div className={classes.my_posts_wrapper}>
            <h3>My Posts</h3>
            <div className={classes.form}>
                <textarea
                    ref={newPostElement}
                    onChange={onInputChange}
                    value={props.profilePage.curInputText}/>
                <button onClick={onAddPost}>Добавить пост</button>
            </div>
            {postsElements}
        </div>
    );
};
