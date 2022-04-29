const sqlite3 = require ("sqlite3");
const db = new sqlite3.Database('./src/infra/database.db');

//==== CLIENTES
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" TEXT,
    "CPF" INTEGER,
    "EMAIL" TEXT,
    "SENHA" TEXT
  );`;
const ADD_CLIENTES =`INSERT INTO CLIENTES (ID, NOME, CPF, EMAIL, SENHA)
VALUES 
    (7, 'Maria','1232312312', 'jose.antonio@bol.com.br', '*******')`
    
    const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, CPF, EMAIL, SENHA)
VALUES 
    (1, 'José Antônio','11122233344', 'jose.antonio@bol.com.br', '*******'),
    (2, 'Maria de Lourdes','22244433355', 'maria.lourdes@gmail.com', '********'),
    (3, 'Almir Souza','66633355589' ,'almir_souza@yahoo.com', '********'),
    (4, 'Amaro da Silva','56564343388' ,'amaro_silva@bol.com.br', '*******'),
    (5, 'Andriele Rayane','12312312345', 'andriele_rayane@gmail.com', '********'),
    (6, 'Osvaldo de Souza','98987654322' ,'osvaldo_souza@yahoo.com', '********')
`
function criasoumnome(){
    db.run(ADD_CLIENTES, () => {

    }
)}


function criaTabelaCli() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaCli() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
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
`

function criaTabelaFornece() {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Fornecedores");
    });
}


function populaTabelaFornece() {
    db.run(ADD_FORNECEDORES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Fornecedores");
    });
}

    db.serialize( ()=> {
        // criaTabelaCli();
        // populaTabelaCli();
        // criaTabelaFornece();
        // populaTabelaFornece();
        criasoumnome();
    });