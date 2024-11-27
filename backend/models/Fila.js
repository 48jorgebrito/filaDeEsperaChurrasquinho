const mongoose = require('mongoose')

const Filas = new mongoose.Schema({
    
    cliente: String,
    descricao:String
},
{
    timestamps: true
})

module.exports = mongoose.model('Fila', Filas)