import { createStore, combineReducers } from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
