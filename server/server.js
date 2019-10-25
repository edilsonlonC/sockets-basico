const express = require('express');
const socketIO = require('socket.io')
const http = require('http')
const path = require('path');

const app = express();
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io = socketIO(server)
io.on('connection', (client) => {
    console.log('connected user');

    client.emit('enviarmensaje', {
        user : 'admin',
        message : 'welcome'
    })
    client.on('disconnect',() => {
        console.log('user disconnected');
    })

    // listen 
    client.on('enviarmensaje',(message) => {
        console.log(message);
        
    })
    
});



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Server on :  ${ port }`);
    

});