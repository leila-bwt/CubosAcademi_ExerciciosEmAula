// Junta todos os elementos de um array em uma string, 
// separando-os com vírgula, e retorna esta string.
// Opcionalmente, pode-se passar uma string como argumento
// para ser colocada entre os itens

const opcoes = ["Uma", "Outra"];

let resultado = opcoes.join();
console.log(resultado);

resultado = opcoes.join("");
console.log(resultado);

resultado = opcoes.join(" ou ");
console.log(resultado);