const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user:'postgres',
    password:'1234',
    database:'aula_conexao_node_pg'
  });
  try {
    await client.connect();

    const resultado = await client.query('SELECT * from empresas');
    await client.end();

    return res.json(resultado);
  }catch(error){
    console.log(error.message);
  }
  
});

app.listen(3000);