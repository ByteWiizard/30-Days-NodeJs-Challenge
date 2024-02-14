const express = require('express');
const http = require('http');
const path = require('path');
const rateLimit = require('express-rate-limit');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});

app.use(limiter);


function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('WebSocket connection established.');

    
    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      
      ws.send(`Server echoes: ${message}`);
    });


    ws.on('close', () => {
      console.log('WebSocket connection closed.');
    });
  });
}

app.get('/websocket', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

setupWebSocket(server);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
