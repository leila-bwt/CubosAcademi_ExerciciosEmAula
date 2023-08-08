const pessoaObj = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function apresentar(pessoa){
    console.log(`Olá! Meu nome é ${pessoa.nome}, 
    sou um jovem de ${pessoa.idade} anos, ${altura} m. de altura 
    e sou ${pessoa.profissao}`)
}
pessoa("João", 12, 1.4, "estudante");