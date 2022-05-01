const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./src/infra/database.db");

//==== CLIENTES
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" TEXT,
    "CPF" INTEGER,
    "EMAIL" TEXT,
    "SENHA" TEXT
  );`;
const ADD_CLIENTES = `INSERT INTO CLIENTES (ID, NOME, CPF, EMAIL, SENHA)
VALUES 
    (7, 'Maria','1232312312', 'jose.antonio@bol.com.br', '*******')`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, CPF, EMAIL, SENHA)
VALUES 
    (1, 'José Antônio','11122233344', 'jose.antonio@bol.com.br', '*******'),
    (2, 'Maria de Lourdes','22244433355', 'maria.lourdes@gmail.com', '********'),
    (3, 'Almir Souza','66633355589' ,'almir_souza@yahoo.com', '********'),
    (4, 'Amaro da Silva','56564343388' ,'amaro_silva@bol.com.br', '*******'),
    (5, 'Andriele Rayane','12312312345', 'andriele_rayane@gmail.com', '********'),
    (6, 'Osvaldo de Souza','98987654322' ,'osvaldo_souza@yahoo.com', '********')
    (7,  'usuario', '00000000000', 'usuario@gmail.com', '12345678')
`;
function criasoumnome() {
  db.run(ADD_CLIENTES, () => {});
}

function criaTabelaCli() {
  db.run(CLIENTES_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de usuários");
  });
}

function populaTabelaCli() {
  db.run(ADD_CLIENTES_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de usuários");
  });
}

//==== FORNECEDORES
const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" TEXT,
    "CNPJ" INTEGER,
    "EMAIL" TEXT,
    "SENHA" TEXT
  );`;

const ADD_FORNECEDORES_DATA = `INSERT INTO FORNECEDORES (ID, NOME, CNPJ, EMAIL, SENHA)
VALUES 
       (1, 'Salve Baterias' , '32.345.345/0001-20', 'salvebateria@salvebateria.com', '*********'),
       (2, 'Planeta do Bem' , '45.675.235/0001-23', 'planetadobem@dobem.com', '*********'),
       (3, 'Mundo das Pilhas' , '45.090.786/0001-32', 'mundodaspilhas@mundopilhas.com', '*********'),
       (4, 'Universo Limpo' , '43.654.655/0001-76', 'universolimpo@universo.com', '*********'),
       (5, 'Habitat verde' , '45.546.878/0001-87', 'verdehabitat@habitat.com', '*********'),
       (6, 'Ambiente Verde' , '12.654.545/0001-43', 'ambienteverde@ambiente.com', '*********')
`;

function criaTabelaFornece() {
  db.run(FORNECEDORES_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Fornecedores");
  });
}

function populaTabelaFornece() {
  db.run(ADD_FORNECEDORES_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Fornecedores");
  });
}

//==== TAREFAS
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TAREFAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" TEXT,
    "DESCRICAO" TEXT
  );`;

const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (ID, TITULO, DESCRICAO)
VALUES 
       (1, 'Conta de água' , 'Regular a água do banho' ),
       (2, 'Separar o lixo' , 'Separar o lixo e destinar para a reciclagem'),
       (3, 'Guardar resíduos' , 'Guardar resíduos no bolso ou mochila até achar uma lixeira'),
       (4, 'Reutilize' , 'Reutilize potes de plástico'),
       (5, 'Carne demais' , 'Diminuir o consumo de carne'),
       (6, 'Bom apetite' , 'Não desperdiçe comida'),
       (7, 'Informe-se antes de comprar' , 'Pesquise e procure comprar de empresas que possuem práticas sustentáveis e não prejudicam o meio ambiente' ),
       (8, 'Fazer compostagem' , 'Faça compostagem do resto dos alimentos'),
       (9, 'Ecobags' , 'Utilizar ecobags'),
       (10, 'Sacolas plásticas' , 'Dispensar o uso de sacolas plásticas'),
       (11, 'Canudos de plástico' , 'Não utilizar canudos de plástico'),
       (12, 'Não utilizar copos plásticos' , 'Não utilizar copos plásticos - troque por uma caneca/xicara'),
       (13, 'Tenha sua árvore' , 'Separe o material reciclável do orgânico' ),
       (14, 'Hora de Separar' , 'Separe o material reciclável do orgânico'),
       (15, 'Destinação correta' , 'Faça a destinação correta de pilhas, celulares e eletrônicos'),
       (16, 'Tire o pé do acelerador' , 'Diminua a utilização de carro'),
       (17, 'Carona' , 'Caso use o carro, vá de carona'),
       (18, 'Comercio Local' , 'Consuma produto de um comercio local'),
       (19, 'Selo Verde' , 'Priorize produtos sustentáveis' ),
       (20, 'Squeeze' , 'Tenha uma garrafa (reutilizável) para chamar de sua'),
       (21, 'Energia elétrica' , 'Evite o desperdício de energia elétrica'),
       (22, 'Sacola de Compras' , 'Leve sua própria sacola quando for fazer compras'),
       (23, 'Não jogue óleo ' , 'Não jogue óleo de cozinha no ralo da pia'),
       (24, 'Reutilize' , 'Reutilize embalagens e use refil')
`;

function criaTabelaTarefas() {
  db.run(TAREFAS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Fornecedores");
  });
}

function populaTabelaTarefas() {
  db.run(ADD_TAREFAS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Tarefas");
  });
}

db.serialize(() => {
  criaTabelaTarefas()
  populaTabelaTarefas()
  // criaTabelaFornece();
  // populaTabelaFornece();
});



