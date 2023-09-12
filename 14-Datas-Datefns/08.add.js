const {add} = require('date-fns');

const date = new Date(2018, 2, 13, 12);

console.log(date);

console.log(add(date, {
    seconds: 2,
    days: 1,
    years: 10

})); // DATA MODIFICADA - não muda o projeto original

console.log(date); // retorna a primeira data sem modificação

// para modificar o original:

/**
 let date = new Date(2018, 2, 13, 12); // usa let e nao const

console.log(date);

date = add(date, {
    seconds: 2,
    days: 1,
    years: 10

}));
// faz a associação de date com a alteração

 */