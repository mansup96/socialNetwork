import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirectComponent";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
