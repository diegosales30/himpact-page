const express = require('express')

const ClienteController = require('../controllers/cliente_controllers')

const router = express.Router();

router
    .get('./clientes', ClienteController.listaClientes)

module.exports = router