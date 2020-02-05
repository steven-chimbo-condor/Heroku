var persona = require('../models/persona.js'),
    express = require('express'),
    router = express.Router();

router.get('/obtener', (req, res) => {
    persona.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/crear', (req, res) => {
    var body = req.body;
    persona.insertMany({
        id: body.id,
        cedula: body.cedula,
        nombre: body.nombre,
        edad: body.edad,
        sexo: body.sexo
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/editar', (req, res) => {
    var body = req.body;
    persona.update({ idpersona: body.idpersona },
        {
            $set: {
              id: body.id,
              cedula: body.cedula,
              nombre: body.nombre,
              edad: body.edad,
              sexo: body.sexo
            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err;
            }
            res.status(200).json(rest)
        })
}).post('/eliminar', (req, res) => {
    persona.remove({ idpersona: req.body.idpersona }, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/suma', (req,res)=>{
  var body=req.body;

 const  num1 = parseInt( req.body.num1);
 const num2 = parseInt(req.body.num2);

 respuesta= num1+num2;

 res.status(200).json(respuesta);
}).post('/mayor', (req,res)=>{
  var body=req.body;

 const  num1 = parseInt( req.body.num1);
 const num2 = parseInt(req.body.num2);

 if(num1>num2){
   res.status(200).json(num1);

 }else{
   res.status(200).json(num2);
 }
}).post('/primo', (req,res)=>{
  let  num1 = parseInt( req.body.num1);
  let contador=0;
  for(let i=2;i<=num1; i++){
    if(num1% i == 0){
      contador++
    }if(contador<=2){
      res.status(200).json({num1:'es primo'})
    }else{
        res.status(200).json({num1:'no es primo'})
    }
  }

})
module.exports = router;
