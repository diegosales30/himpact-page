const express = require("express");
const clientes = require("./src/models/Cliente");
const cors = require("cors");

// const cliente_controllers = require("./src/controllers/cliente_controllers")

const app = express();

app.use(express.json());

const ClienteController = require("./src/controllers/cliente_controllers");

const bd = require("./src/infra/sq-litebd");

ClienteController(app, bd);
// FornecedorController(app)

app.use((req, res, next) => {
  res.header("Acesse-Control-Allow-Origin", "http://localhost/:4000");
  app.use(cors());
  next();
});
module.exports = app;
