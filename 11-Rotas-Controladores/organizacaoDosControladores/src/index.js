const express = require('express');


// importando os controladores com desestruturação
const {
    filtrarProfessores,
    encontrarUmProfessor
 } = require('./controladores/professores')
 // mesma coisa que:
 // const controladorProfessores = require('./controladores/professores');


const app = express();

// localhost:3000/professores
app.get('/professores/', filtrarProfessores);

// localhost:3000/professores/1
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);