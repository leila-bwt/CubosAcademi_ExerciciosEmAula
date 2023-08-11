const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores);
// a rota /instrutores vai listar uma coleção de instrutores
// e vai redirecionar para o controlador listarInstrutores
// que está dentro de 'instrutores.js'

rotas.get('/instrutores/:id', instrutores.obterInstrutor);
//rota para obter as informações de apenas um instrutor
//através do id

rotas.post('/instrutores', instrutores.cadastrarInstrutor);
//rota para pegar o controlador Instrutores com a função cadastrarInstrutor

module.exports = rotas;