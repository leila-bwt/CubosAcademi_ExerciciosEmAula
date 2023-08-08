function determinarFaixaEtaria(idade){
// declarando função para determinar faixa etária    
    if (idade <=21){
        return "jovem";
    }else if (idade <66){
        return "adulto(a)";
    }else {
        return "idoso(a)";
    }
}

function apresentar(pessoa){

    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);
    //declarando variável faixa etária e chamando a função determinarFaixaEtaria + idade

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos
    e sou ${pessoa.profissao}.`)
}

const pessoa1 = { // declarando a variavel
    nome: "Leila",
    idade: 30,
    profissao: "desenvolvedor"
}

apresentar(pessoa1); // chamando a função