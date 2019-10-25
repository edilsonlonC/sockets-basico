var socket = io()
// escuchar informacion
socket.on('connect', function(){
    console.log('connected to server')
})
socket.on('disconnect', function(){
    console.log('connection lost')
})

// enviar información 
socket.emit('enviarmensaje',{
    user : 'Name user',
    mesage : 'message 1'
}, function (resp) {
    console.log('respuesta server ',resp)
})

// escuchar 
socket.on('enviarmensaje', function(data){
    console.log(data)
})