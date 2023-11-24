const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {Contato} = require("./contato");
const port = 7070;

app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
console.log("seridor aberto na porta " + port);
});

app.get("/", ( req, res)=>{
res.sendFile('public/index.html' , { root : __dirname });
})

app.post("/cadastro", (req, res)=>{
const {nome, whatsapp} = req.body;
insertContato(nome, whatsapp);
res.send(`<h1> Obrigado pelo cadastro, ${req.body.nome}!</h1>`)
});

app.get("/contatos", async (req,res)=>{
      const contatos= await getContatos();
      var ul="";
      contatos.forEach(contato =>{
      ul = ul +`<li><h2>${contato.nome}</h2><h3>${contato.whatsapp}</h3></li>`
 });
res.send(`<ul>${ul}</Ul>`);
});

mongoose.connect("mongodb+srv://daniel97:vCtZzI7c6UkztTm8@cluster0.qzhcbbl.mongodb.net/?retryWrites=true&w=majority");


//mongodb+srv://gabriel:mW2s0BbFlzZAfBcm@cluster0.lnvstco.mongodb.net/?retryWrites=true&w=majority

function insertContato(nome, whatsapp){
 const dados = new Contato({
       nome: nome,
       whatsapp: whatsapp,
});
 dados.save();
}

async function getContatos(){
const contatos = await Contato.find();
return contatos;
}
