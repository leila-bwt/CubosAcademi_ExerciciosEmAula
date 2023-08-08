function apresentar(pessoa){
    if (pessoa.idade < 25){
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos
e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade < 66){
        console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos
e sou ${pessoa.profissao}.`)
    } else {
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos
e sou ${pessoa.profissao}.`)
    }
}

const pessoa1 = {
    nome: "Leila",
    idade: 30,
    profissao: "desenvolvedor"
}

apresentar(pessoa1);

const pessoa2 = {
    nome:"Pedro",
    idade: 65,
    profissao: "médico"
}

apresentar(pessoa2);