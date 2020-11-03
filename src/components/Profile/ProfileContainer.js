import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  setProfile,
  getStatus,
  updateStatus,
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirectComponent";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID || this.props.isAuth.userID;
    if (userID) {
      this.props.setProfile(userID);
      this.props.getStatus(userID)
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  me: state.auth.credentials,
});

export default compose(
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
