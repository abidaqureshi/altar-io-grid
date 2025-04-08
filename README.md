# Altar.io Grid Generator

A real-time grid generator application with payment tracking capabilities.

## Project Structure

- `frontend/` - React application built with Vite, Tailwind CSS, and Ant Design
- `backend/` - Node.js backend with TypeScript

## Features

- 10x10 grid with random alphabetic characters
- Real-time updates every second
- 2-digit code generation based on grid content
- Character bias input with 20% weighting
- Payment tracking with grid state preservation
- Real-time synchronization across multiple clients

## Getting Started

### Prerequisites

- Node.js 12+
- npm or yarn

### Installation

1. Clone the repository
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
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
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