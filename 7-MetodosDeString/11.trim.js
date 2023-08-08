// método que remove espaços em branco tanto no inicio como no final
// de uma string
// usar quando for guardar um dado em banco de dados que não faz sentido 
// ter espaços no inicio ou no fim

const email = "  exemplo@cubos.academy ";
const formato = email.trim();
console.log(`_${formato}_`);