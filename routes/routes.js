const express       = require('express');
const router        = express.Router();
const API           = require('../controllers/api.controller.js');

// Crear
router.get('/',   API.getEnviroments);

module.exports = router;
