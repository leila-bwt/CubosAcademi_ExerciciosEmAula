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

rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
// rota para fazer atualização das informações do instrutor exceto id
// atraves do instrutores-id vai levar para controlador de instrutores
// na função atualizarInstrutor

rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
// vai alterar apennas uma parte do recurso,
// o path está fazendo a atualização do instrutor,
// buscando pelo id e alterando o status

rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);
// vai pegar controlador dentro de instrutor e excluir instrutor
module.exports = rotas;