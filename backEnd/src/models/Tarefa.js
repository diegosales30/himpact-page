let id = 0;

class tarefasConstructor  {
    constructor (titulo,descricao){
    this.id = ++id;
    this.titulo = titulo;
    this.descricao = descricao;
}}

module.exports = tarefasConstructor