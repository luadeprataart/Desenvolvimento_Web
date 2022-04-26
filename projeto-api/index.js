const express = require("express");
const app = express();
const porta = 3000;
let dados = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "consulta realizada" });
});

app.post("/cadastracliente", (req, res) => {
  const nome = req.body.nome;
  const telefone = req.body.telefone;
  console.log(`Cadastrado: ${nome} com o telefone ${telefone}`);
  dados.push({ nome, telefone });
  res.status(201).json({ mensagem: `Cliente ${nome} cadastrado` });

  if (!nome) {
    res.status(422).json({ mensagem: "Campo nome é obrigatório" });
    return;
  }
});

app.delete("/deletacliente/:nome", (req, res) => {
  const nome = req.params.nome; //{nome}
  const dados = dados.filter((client) => client.nome !== nome);
  res.json({ mensagem: `Cliente ${nome} deletado` });
});

app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`);
});
