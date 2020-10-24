import {
  addPostActionCreator,
  changeInputValueActionCreator,
} from "../../../redux/profilePageReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
				return {
    changeInputValue: (text) => dispatch(changeInputValueActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
