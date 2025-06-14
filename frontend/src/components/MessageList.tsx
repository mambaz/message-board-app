import React from "react";
import { Message } from "../types";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
	<div className="message-list">
	  <h2>Messages</h2>
	  {messages.length === 0 ? (
		<p className="no-messages">No messages yet. Be the first to post!</p>
	  ) : (
		messages.map((message) => (
		  <div key={message.id} className="message-item">
			<div className="message-header">
			  <strong>{message.name}</strong>
			  <span className="timestamp">
				{new Date(message.timestamp).toLocaleString()}
			  </span>
			</div>
			<div className="message-content">{message.message}</div>
		  </div>
		))
	  )}
	</div>
  );
};

export default MessageList;