const express = require('express'),
      router = express.Router(),
      persona = require('../controllers/controller_persona');

router.use('/persona',persona);

module.exports=router;
