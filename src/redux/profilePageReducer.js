import { profilelAPI } from "../api/api";

const ADD_POST = "ADD_POST",
  CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE",
  SET_USER_PROFILE = "SET_USER_PROFILE",
  SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, post: "Hi, how r u?", likesCount: 12 },
    { id: 2, post: "How are you?", likesCount: 24 },
    { id: 3, post: "Yo", likesCount: 3 },
    { id: 4, post: "Privet", likesCount: 33 },
  ],
  curInputText: "",
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.curInputText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        curInputText: "",
      };

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        curInputText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeInputValueActionCreator = text => ({
  type: CHANGE_INPUT_VALUE,
  newText: text,
});
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = status => ({
  type: SET_STATUS,
  status,
});

export const setProfile = userID => dispatch => {
  profilelAPI.getProfile(userID).then(data => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = userID => dispatch => {
  profilelAPI.getStatus(userID).then(data => {
    dispatch(setStatus(data));
  });
};
export const updateStatus = status => dispatch => {
  profilelAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
