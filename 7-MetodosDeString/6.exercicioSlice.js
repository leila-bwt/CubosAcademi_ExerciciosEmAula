// Obter apenas os dois digitos do estado de uma cidade

const cidade = "Salvador-BA";

let estado = cidade.slice(-2)
console.log(estado);

/* Exemplo da aula
const penultimoIndex = cidade.length -2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);
*/