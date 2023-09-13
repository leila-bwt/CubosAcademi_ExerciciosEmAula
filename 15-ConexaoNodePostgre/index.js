const express = require('express');
const pool = require('./conexao');

  const app = express();

  app.use(express.json());

  app.get('/:id', async (req, res) => {
    const{id} = req.params
  try {
    const resultado = await pool.query(
      `SELECT * from empresas where id = ${id}`
      ); // where id passado no params
      // DE FORMA ALGUMA DEVEMOS CONCATENAR REGISTROS DENTRO DE UMA QUERY
      // POIS ISSO PODE GERAR SQL INJECTION QUE É UMA FORMA DE ATAQUE
      // O RISCO É ALTO, POIS O HACKER PODE APAGAR TODOS OS REGISTROS
    return res.json(resultado.rows[0]);
  } catch (error) {
    console.log(error.message);
  }

});

app.listen(3000);