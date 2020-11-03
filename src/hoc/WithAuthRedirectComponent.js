import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  isAuth: state.auth.credentials,
});

export const WithAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />;
      }

      return <Component {...this.props} />;
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(
    RedirectComponent
  );

  return ConnectedRedirectComponent;
};
