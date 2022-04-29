let id = 0;

class fornecedorConstructor  {
    constructor (nome,cpf,email,senha,cep,rua,numero,bairro,estado){
    this.id = ++id;
    this.nome = nome;
    this.cnpj = cpf;
    this.email = email;
    this.senha = senha;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.estado = estado;
}}



module.exports = fornecedorConstructor