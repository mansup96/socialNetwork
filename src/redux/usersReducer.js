const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
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
        users: state.users.map((user) => {
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
    default:
      return state;
  }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});

export default usersReducer;
