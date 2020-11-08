import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import { compose } from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { setMe } from "./redux/authReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.setMe();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <main>
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </main>
      </div>
    );
  }
}

export default compose(withRouter, connect(null, { setMe }))(App);
