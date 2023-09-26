const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    //res.json(`rodando API1. Porta 3000` );

    const resultadoAxios = await axios.get('http://localhost:3001/carros');

    res.json(resultadoAxios.data);
   
});

app.listen(3000)