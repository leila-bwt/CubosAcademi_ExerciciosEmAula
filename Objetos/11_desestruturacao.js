// Desestruturação de Objetos = Destructuring

const pessoa = {
    nome : "Leila",
    idade : 20,
    cidade : "São Paulo",
    profissao: "Desenvolvedor"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa; 
// cria variável  e igua-la ao objeto que quer desestruturar
// nome da variável tem que ser o mesmo nome do campo que será usado

console.log(nome, idade);
console.log(outros); // imprime os demais atributos do objeto