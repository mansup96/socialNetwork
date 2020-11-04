import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setMe, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth,
  };
};

export default connect(mapStateToProps, { setMe, logout })(HeaderContainer);
