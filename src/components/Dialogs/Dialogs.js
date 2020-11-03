import React from "react";
import classes from "./Dialogs.module.css";
import ChatItem from "./ChatItem/ChatItem";
import MessageItem from "./MessageItem/MessageItem";


function Dialogs(props) {
  let messageItems = props.dialogsPage.messageData.map(elem => (
    <MessageItem message={elem.message} id={elem.id} />
  ));

  let chatItems = props.dialogsPage.chatData.map(elem => (
    <ChatItem name={elem.name} id={elem.id} />
  ));

  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.chat_container}>
      <div className={classes.chats_list}>{chatItems}</div>
      <div>
        <div>{messageItems}</div>
        <div>
          <div>
            <textarea
              onInput={onNewMessageChange}
              value={newMessageBody}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
