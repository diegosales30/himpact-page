const res = require("express/lib/response");
const bd = require("../infra/sq-litebd");
const tarefasConstructor = require("../models/Tarefa");

const tarefa = (app, bd) => {
  app.get("/tarefas", (req, res) => {
    bd.all(`SELECT * FROM TAREFAS`, (error, rows) => {
      if (error) {
        res.json("Erro ao selecionar o Banco");
      } else {
        const a = Math.floor(Math.random() * rows.length);
        const b = Math.floor(Math.random() * rows.length);
        const c = Math.floor(Math.random() * rows.length);
        const d = Math.floor(Math.random() * rows.length);
        const data = [rows[a], rows[b], rows[c], rows[d]];
        res.status(200);
        res.json({ data });

        /**
        fiz umas alterações aqui no back para
        que eu recebesse o data como array de obj 
        para ficar melhor de fazer iteração no front
        ....ywhw
        
         */
        // const emb1 = rows[a];
        // const emb2 = rows[b];
        // const emb3 = rows[c];
        // const emb4 = rows[d];
        // emb1, emb2, emb3, emb4
      }
    });
  });

  app.get("/tarefas/:id", (req, res) => {
    const requisicao = req.params.id;

    bd.all(`SELECT * FROM TAREFAS WHERE id = ${requisicao}`, (error, rows) => {
      if (error) {
        console.log(typeof requisicao, requisicao);
        res.json({ "Erro ao retornar nome": error });
      } else {
        console.log(typeof requisicao, requisicao);
        res.json({ "nome selecionado": rows });
      }
    });
  });
};
module.exports = tarefa;
