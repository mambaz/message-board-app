import React, { useState, useEffect } from 'react';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import { Message, CreateMessageRequest } from './types';
import { api } from './api';
import './App.css';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
	try {
	  const fetchedMessages = await api.getMessages();
	  setMessages(fetchedMessages);
	  setError(null);
	} catch (err) {
	  setError('Failed to load messages');
	  console.error('Error fetching messages:', err);
	} finally {
	  setLoading(false);
	}
  };

  const handleSubmitMessage = async (messageData: CreateMessageRequest) => {
	const newMessage = await api.createMessage(messageData);
	setMessages(prev => [...prev, newMessage]);
  };

  useEffect(() => {
	fetchMessages();
  }, []);

  if (loading) {
	return <div className="loading">Loading messages...</div>;
  }

  if (error) {
	return (
	  <div className="error">
		<p>{error}</p>
		<button onClick={fetchMessages}>Retry</button>
	  </div>
	);
  }

  return (
	<div className="App">
	  <header className="App-header">
		<h1>Message Board</h1>
	  </header>
	  <main className="App-main">
		<MessageForm onSubmit={handleSubmitMessage} />
		<MessageList messages={messages} />
	  </main>
	</div>
  );
};

export default App;
