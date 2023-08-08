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
    apelidos: ["Nenas ", "Lê", "Magrela"]
};

let textoCNH = "";

if (pessoa.temCNH){
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, 
${pessoa.altura} de altura, ${textoCNH} 
e os seguintes apelidos:`);

for(let apelido of pessoa.apelidos){
    console.log(`- ${apelido}`); // vai pegar todos os itens do array
}