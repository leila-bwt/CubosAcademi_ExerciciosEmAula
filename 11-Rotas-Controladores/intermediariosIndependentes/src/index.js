const express = require('express');


// importando os controladores com desestruturação
const {
    filtrarProfessores,
    encontrarUmProfessor
 } = require('./controladores/professores')
 // mesma coisa que:
 // const controladorProfessores = require('./controladores/professores');


const app = express();

const primeiroIntermediario = (requisicao, resposta, next) => {
    console.log('Passei no primeiro intermediário');
    next(); // chamará a proxima requisição
}

const segundoIntermediario = (requisicao, resposta, next) => {
    console.log('Passei no segundo intermediário');
    next(); // chamará a proxima requisição
}

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

// localhost:3000/professores
app.get('/professores/', filtrarProfessores);

// localhost:3000/professores/1
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);