# Altar.io Grid Generator

A real-time grid generator application with payment tracking capabilities.

## Project Structure

- `frontend/` - React application built with Vite, Tailwind CSS, and Ant Design
- `backend/` - Nestjs backend with TypeScript, with WebSocket support

## Features

- 10x10 grid with random alphabetic characters
- Real-time updates every second using WebSockets
- 2-digit code generation based on grid content
- Character bias input with 20% weighting
- Payment tracking with grid state preservation
- Real-time synchronization across multiple clients
- RESTful API for grid and payment operations

## Getting Started

### Prerequisites

- Node.js 20.11.0
- npm version 10.2.4

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/altar-io-grid.git
   cd altar-io-grid
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend:
   ```bash
   cd backend
   npm run start:dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open the application in your browser:
   ```
   http://localhost:5173/
   ```

### Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:
```
PORT=5000
```

For the frontend, create a `.env` file in the `frontend/` directory:
```
VITE_API_URL=http://localhost:{SERVER_PORT}/v1/api
VITE_SOCKET_URL=ws://localhost:{SERVER_PORT}
```

## API Documentation

The backend provides the following endpoints:

- `GET /api/grid` - Get current grid state
- `GET /api/code` - Get current 2-digit code
- `POST /api/bias` - Set character bias
- `GET /api/payments` - Get all payments
- `POST /api/payments` - Add new payment

## WebSocket Events

- `grid:update` - Grid state update
- `code:update` - Code update
- `payments:update` - Payments list update

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- Ant Design

### Backend
- NestJs
- TypeScript
- WebSocket
- Sqlite3

### Tools
- ESLint
- Prettier
- Docker 

## Docker deployment

```
cd backend
docker build -t altar-grid-app .
docker run -p 3000:3000 altar-grid-app
```
