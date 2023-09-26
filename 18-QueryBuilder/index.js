const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    //select * from agenda
    //const agenda = await knex('agenda').debug();//debug mostra o sql que foi executado
    //const agenda = await knex.raw('select * from agenda');
    //const agenda = await knex('agenda').where('id', '!=', 5).debug();
    //const agenda = await knex('agenda').where({id:5}).debug();

    //const agenda = await knex('agenda').where({id:5}).first().debug();
    //first() retorna apenas o primeiro registro

    const agenda = await knex('agenda').where({id:5}).select('id', 'nome').first().debug();

    
    return res.json(agenda);
});

app.listen(3000);