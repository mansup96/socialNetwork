import axios from "axios";
import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthClientData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
					console.log(this.props);
          let { id, login, email } = response.data.data;
          this.props.setAuthClientData(id, email, login);
        }
      }).catch(err => console.log(err));
  } 

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

export default connect(mapStateToProps, { setAuthClientData })(HeaderContainer);
