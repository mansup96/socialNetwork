import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          pageData={{
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            users: this.props.users,
          }}
          onPageChanged={this.onPageChanged}
          onFollow={this.props.follow}
          onUnfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
  follow,
  unfollow,
  setUsers, //эквивалентно mapDispatchToProps
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
})(UsersContainer);
