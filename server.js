const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Message received from client:', message.toString());
    ws.send(`Server received: ${message}`);
  });

  // Simulate sending a message from the server to the client
  setTimeout(() => {
    ws.send('Hello from the server!');
  }, 2000);
});
