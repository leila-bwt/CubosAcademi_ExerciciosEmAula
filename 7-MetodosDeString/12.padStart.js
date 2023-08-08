// preenche uma string colocando text no início dela 
//vária vezes, se necessário, até que a string atinja o tamanho length

const ultimos4dig = "2345";

const numCartao = ultimos4dig.padStart(19, "**** ");
console.log(numCartao);