var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://Chimbomba:Loja1998@cluster0-aksgn.mongodb.net/Usuario?retryWrites=true&w=majority');


mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a mongodb')
})

module.exports=connection;
