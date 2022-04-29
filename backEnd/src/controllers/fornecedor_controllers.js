const fornecedores = require("../models/Cliente")

class FornecedorController {

    static fornecedores = (req,res) => {
        fornecedores.find((err, fornecedores) => {
            res.status(200).json(fornecedores)
        })
    }
}

module.exports = FornecedorController