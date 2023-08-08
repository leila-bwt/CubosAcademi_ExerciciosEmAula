// Fazer um programa que altere uma string no formato de ponto
// para virgula em um preço.

const preco = "97.50";

const ponto = preco.replace(".", ",");
console.log(ponto); // replace altera uma cópia
console.log(preco); // variavel original nao se altera