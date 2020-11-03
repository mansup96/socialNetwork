import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = { editMode: false, status: this.props.status || "" };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  changeStatus = e => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {(this.state.editMode || !this.props.status) && (
          <input
            type="text"
            onChange={this.changeStatus}
            value={this.state.status}
            onBlur={this.deactivateEditMode}
            autoFocus={true}
          />
        )}
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
