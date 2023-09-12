const {addBusinessDays} = require('date-fns');

// add 10 dias da semana a partir de 01/09/2014
let result = addBusinessDays(new Date(2014, 8, 1),10)

console.log(result);