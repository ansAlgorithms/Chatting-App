const app = require('express')();
const dotenv = require('dotenv');
const socket = require('socket.io');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoute');
app.use('/chat', chatRoutes);

dotenv.config();
//connect to database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
console.log('connected to db!')
);

//connected to server
let port = 3000;
const server = app.listen(port, () => {
  console.log('server up and running...')
});
var io = socket(server);
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});