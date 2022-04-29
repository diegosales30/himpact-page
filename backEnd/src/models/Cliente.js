let id = 0;

class clienteConstructor  {
    constructor (nome,cpf,email,senha){
    this.id = ++id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
}}



module.exports = clienteConstructor
