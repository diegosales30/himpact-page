const express = require("express");
const clientes = require("./src/models/Cliente");
const cors = require("cors");

// const cliente_controllers = require("./src/controllers/cliente_controllers")

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT, POST, DELETE");
  app.use(cors());
  next();
});


const ClienteController = require("./src/controllers/cliente_controllers");
const TarefaController = require("./src/controllers/tarefas_controllers");
const bd = require("./src/infra/sq-litebd");

ClienteController(app, bd);
TarefaController(app, bd);
// FornecedorController(app)

module.exports = app;
