const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
   const maria = {
      nome: 'Mario',
      email: 'mario@email.com',
      telefone: '(99) 999999996'
   }

   const joao = {
      nome: 'Joana',
      email: 'joana@email.com',
      telefone: '(99) 999999995'
   }

   //const agenda = await knex('agenda').insert(leila).returning(['id', 'nome']);
   const agenda = await knex('agenda').insert([maria, joao]).returning(['*']);
   return res.json(agenda);
   
});

app.put('/:id', async (req, res) => {
   const{nome, email, telefone} = req.body;
   const{id} = req.params;

   const agendaAtualizada = await knex('agenda').update({nome, email, telefone}).where({id});
   return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {
   const{id} = req.params;

   const agendaDeletada = await knex('agenda').del().where({id}).returning('id');
   return res.json(agendaDeletada);
});

app.listen(3000);