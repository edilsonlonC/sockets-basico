
const {io} = require('../server')

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
    client.on('enviarmensaje',(data , callback) => {
        console.log(data);
        // send message all users
        client.broadcast.emit('enviarmensaje',data)
        // if (message.user){
        //     callback({
        //         resp: 'good req'
        //     })
        // }
        // else {
        //     callback({
        //         resp : 'bad req'
        //     })
        // }
    })
    
})
