// const app = require('express')();
// const http = require('http').Server(app);
const io = require('socket.io');
module.exports = {
    chatting : (req, res) => {
        //console.log('check')
        
        res.sendFile(__dirname + '/index.html');
        
    }
    
}