var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personaScehma = new Schema({
    id:{type:Number,trim:true},
    cedula:{type:String,trim:true},
    nombre:{type:String,trim:true},
    edad:{type:Number,trim:true},
    sexo:{type:String,trim:true},
    num1:{type:Number,trim:true},
    num2:{type:Number,trim:true},
    respuesta:{type:String,trim:true},


})
var usuario = mongoose.model('persona',personaScehma);

module.exports=usuario;
