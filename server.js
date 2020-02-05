const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();

const index_persona = require('./Router/router_persona');
var connection = require('./config_connection/connection');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

//see petitions
app.use(morgan('dev'));

//routes

app.use('/',index_persona);

//port
var port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log('Iniciado', port)
})
