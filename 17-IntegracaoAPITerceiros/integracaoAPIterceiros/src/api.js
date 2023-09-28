const axios = require('axios');
const apiKey = require('./apiKey.js');

const instanciaAxios = axios.create({
    baseURL: 'https://api.stripe.com/v1',
    headers:{
        authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

module.exports = instanciaAxios;

//const dados = {
 //   nome: 'João da Silva',
 //   email: 'joao@email.com'
//}

//qs.stringify(dados)
// convertendo para o formato x-www-form-urlencoded