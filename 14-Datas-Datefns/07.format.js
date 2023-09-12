//const datefns = require('date-fns');
// dessa forma importa todas as bibliotecas

const {format} = require('date-fns');
//assim pega somente a função / metodo que será utilizada

const date = new Date(2017, 3, 12);

console.log(format(date, "dd-MMM-yyyy"));
console.log(format(date, "dd/MMM/yyyy"));
console.log(format(date, "dd 'de' MMM 'de' yyyy"));