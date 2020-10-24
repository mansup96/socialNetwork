const SET_CLIENT_DATA = "SET_CLIENT_DATA";

let initialState = {
  userID: null,
  email: null,
  login: null,
	isFetching: false,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENT_DATA:
      return {
        ...state,
				...action.data,
				isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthClientData = (userID, email, login) => ({
  type: SET_CLIENT_DATA,
  data: { userID, email, login },
});

export default authReducer;
