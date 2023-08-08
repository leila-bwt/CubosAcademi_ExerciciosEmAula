const pessoa = {
    nome: "Leila", // associa usando dois pontos
    altura: 1.62,
    peso: 55,
};

pessoa.nome = "Leilaine" // pode-se manipular essa variavel posi a atribuição é no conteudo e nao na variável

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} m. e peso ${pessoa.peso} Kg.`); 
// para acessar a variável especificamente uma propriedade
// usamos variável + ponto + propriedade