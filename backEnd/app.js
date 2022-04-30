const express = require ("express");
const cors = require("cors")
const clientes = require("./src/models/Cliente");
// const cliente_controllers = require("./src/controllers/cliente_controllers")



const app = express();

app.use(cors())

app.use(express.json()) 


const ClienteController = require('./src/controllers/cliente_controllers')
// const FornecedorController = require('./src/controllers/fornecedor_controllers')
const bd = require('./src/infra/sq-litebd')

ClienteController(app,bd)
// FornecedorController(app)



module.exports = app