
// Static Express server
const express = require('express');
const http = require('http');

// Create HTTP server
const app = express();
const server = http.Server(app);

// Server "app" directory
app.use(express.static(`${__dirname}/../app`));

// Start Server
server.listen( 8000, () => console.log('Photo Message running on localhost:8000'));
