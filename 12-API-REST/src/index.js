const express = require ('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());
// só vai aceitar que os middleware envie
//as informações para o servidor no formato json

app.use(rotas);

app.listen(3000);