const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema({
nome: String,
whatsapp: String,
});

const Contato = mongoose.model("Contato", contatoSchema);

module.exports = {
Contato
}
