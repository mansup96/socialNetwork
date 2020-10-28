import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      followingIDs,
    } = this.props;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          pageData={{
            totalUsersCount,
            pageSize,
            currentPage,
            users,
            followingIDs,
          }}
          onPageChanged={this.onPageChanged}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIDs: state.usersPage.followingIDs,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     onFollow: (userID) => dispatch(followAC(userID)),
//     onUnfollow: (userID) => dispatch(unfollowAC(userID)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//     setTotalCount: (count) => dispatch(setTotalCountAC(count)),
//     toggleFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
//   };
// };

export default connect(mapStateToProps, {
  followUser,
  unfollowUser, //эквивалентно mapDispatchToProps
  setCurrentPage,
  getUsers,
})(UsersContainer);
