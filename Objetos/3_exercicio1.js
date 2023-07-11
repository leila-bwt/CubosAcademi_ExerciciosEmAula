/** Declarar uma variavel que armazena um objeto contendo as seguintes propriedades:
 * Nome, Idade, Altura, temCNH e apelidos
 * Imprima na tela:
 * pessoa.nome tem pessoa.idade, pessoa.altura, pessoa.temCNH e
 * os dois apelidos
 */

const pessoa = {
    nome: "Leila",
    idade: 38,
    altura: 1.62,
    temCNH: true,
    apelidos: ["Nenas ", "Lê"]
};

let textoCNH = "";

if (pessoa.temCNH){
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, 
${pessoa.altura} de altura, ${textoCNH} 
e os seguintes apelidos: 
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);