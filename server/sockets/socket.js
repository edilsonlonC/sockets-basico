
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
    client.on('enviarmensaje',(message , callback) => {
        console.log(message);
        if (message.user){
            callback({
                resp: 'good req'
            })
        }
        else {
            callback({
                resp : 'bad req'
            })
        }
    })
    
})
