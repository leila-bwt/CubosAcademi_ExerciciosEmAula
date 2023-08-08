function cumprimentar(pessoa, idade){ // funcao declarada
    console.log(`Olá, ${pessoa}! Você tem ${idade} anos.`);
}

console.log(pessoa); // ERRO = funcao só roda dentro do escopo
cumprimentar("Leila", 38);
cumprimentar("João", 15);
cumprimentar("José", 20);
cumprimentar("Maria", 10);