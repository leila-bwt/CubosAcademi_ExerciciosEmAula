const pessoa = {
    nome: "Leila",
    altura: 1.62,
    peso: 55,
};

pessoa['nome'] = "Maria" 
// propriedade pode ser declarada em colchetes e propriedade entre aspas
pessoa['altura'] = 1.55,
pessoa['peso'] = 69,

console.log(`Meu nome é ${pessoa.nome}, 
tenho ${pessoa.altura} m. e peso ${pessoa.peso} Kg.`);