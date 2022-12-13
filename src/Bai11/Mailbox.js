import React from "react";
import ReactDOM from "react-dom/client";
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread Messages.</h2>
      )}
    </div>
  );
}

export default Mailbox;
