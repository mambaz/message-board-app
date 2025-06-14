import express, { Request, Response } from 'express';
import cors from 'cors';
import { Message, CreateMessageRequest } from './types';

// If you see a type error for 'process', install @types/node: npm i --save-dev @types/node
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// In-memory storage for messages
let messages: Message[] = [
  {
    id: 1,
    name: 'System',
    message: 'Welcome to the message board!',
    timestamp: new Date()
  }
];
let nextId = 2;

// Routes
app.get('/api/messages', (req: Request, res: Response) => {
  res.json(messages);
});

app.post('/api/messages', (req: Request, res: Response) => {
  const { name, message }: CreateMessageRequest = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }
  const newMessage: Message = {
    id: nextId++,
    name: name.trim(),
    message: message.trim(),
    timestamp: new Date()
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
