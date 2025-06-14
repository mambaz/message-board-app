# Message Board App

A simple message board application with a React frontend and Node.js backend.

## Project Structure

```
message-board-app/
├── backend/    # Node.js + Express backend
├── frontend/   # React frontend
└── README.md   # Instruction document
```

## Quick Start

### 1. Setup Backend
```bash
cd backend
npm install
npm run dev
```
Backend will run on http://localhost:3001

### 2. Setup Frontend
```bash
cd frontend
npm install
npm start
```
Frontend will run on http://localhost:3000

## Features
- View all messages in real-time
- Post new messages with name and content
- Simple, clean interface
- TypeScript for type safety

## API Endpoints

- `GET /api/messages` — Get all messages
- `POST /api/messages` — Create a new message
