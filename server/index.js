
// Static Express server
const express = require('express');
const http = require('http');
const fs = require('fs')
const socketio = require('socket.io')

// Create HTTP server
const app = express();
const server = http.Server(app);
const io = socketio(server)

const messageData = fs.readFileSync(`${__dirname}/db.json`)
const messages = messageData ? JSON.parse(messageData) : []

io.on('connection', socket => {
  socket.emit('all_messages', messages)

  socket.on('new_message', (message) => {
    messages.unshift(message)

    socket.broadcast.emit('new_message', message)

    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(messages))
  })
})

// Server "app" directory
app.use(express.static(`${__dirname}/../app`));

// Start Server
server.listen( 8000, () => console.log('Photo Message running on localhost:8000'));
