import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  TOGGLE_FETCHING = "TOGGLE_FETCHING",
  TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingIDs: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingIDs: action.isInProgress
          ? [...state.followingIDs, action.userID]
          : state.followingIDs.filter(id => id !== action.userID),
      };
    default:
      return state;
  }
};

export const follow = userID => ({ type: FOLLOW, userID });
export const unfollow = userID => ({ type: UNFOLLOW, userID });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalCount = count => ({ type: SET_TOTAL_COUNT, count });
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleIsFollowingInProgress = (userID, isInProgress) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  userID,
  isInProgress,
});

export const getUsers = (currentPage, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true));

  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  });
};

export const followUser = userID => dispatch => {
  dispatch(toggleIsFollowingInProgress(userID, true));

  usersAPI
    .follow(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userID));
      }
      dispatch(toggleIsFollowingInProgress(userID, false));
    })
    .catch(err => {
      console.log(err);
      dispatch(toggleIsFollowingInProgress(userID, false));
    });
};

export const unfollowUser = userID => dispatch => {
  dispatch(toggleIsFollowingInProgress(userID, true));
  usersAPI
    .unfollow(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userID));
      }
      dispatch(toggleIsFollowingInProgress(userID, false));
    })
    .catch(err => {
      console.log(err);
      dispatch(toggleIsFollowingInProgress(userID, false));
    });
};

export default usersReducer;
