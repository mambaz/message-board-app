import React, { useState } from 'react';
import { CreateMessageRequest } from '../types';

interface MessageFormProps {
  onSubmit: (messageData: CreateMessageRequest) => Promise<void>;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	if (!name.trim() || !message.trim()) {
	  alert('Please fill in both name and message');
	  return;
	}
	setIsSubmitting(true);
	try {
	  await onSubmit({ name: name.trim(), message: message.trim() });
	  setName('');
	  setMessage('');
	} catch (error) {
	  alert('Failed to post message. Please try again.');
	} finally {
	  setIsSubmitting(false);
	}
  };

  return (
	<div className="message-form">
	  <h2>Post a Message</h2>
	  <form onSubmit={handleSubmit}>
		<div className="form-group">
		  <label htmlFor="name">Your Name:</label>
		  <input
			id="name"
			type="text"
			value={name}
			onChange={e => setName(e.target.value)}
			disabled={isSubmitting}
			placeholder="Enter your name"
		  />
		</div>
		<div className="form-group">
		  <label htmlFor="message">Message:</label>
		  <textarea
			id="message"
			value={message}
			onChange={e => setMessage(e.target.value)}
			disabled={isSubmitting}
			placeholder="Enter your message"
			rows={4}
		  />
		</div>
		<button type="submit" disabled={isSubmitting}>
		  {isSubmitting ? 'Posting...' : 'Post Message'}
		</button>
	  </form>
	</div>
  );
};

export default MessageForm;