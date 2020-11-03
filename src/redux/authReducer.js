import { authAPI } from "../api/api";

const SET_CLIENT_DATA = "SET_CLIENT_DATA";

let initialState = {
  credentials: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENT_DATA:
      return {
        ...state,
        credentials: { ...action.data },
      };
    default:
      return state;
  }
};

export const setAuthClientData = (userID, email, login) => ({
  type: SET_CLIENT_DATA,
  data: { userID, email, login },
});

export const setMe = () => dispatch => {
  authAPI.me().then(data => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthClientData(id, email, login));
    }
  });
};

export default authReducer;
