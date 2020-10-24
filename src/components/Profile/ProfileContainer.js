import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profilePageReducer";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID || 2;
    if (userID) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithURLDataContainerComponent
);
