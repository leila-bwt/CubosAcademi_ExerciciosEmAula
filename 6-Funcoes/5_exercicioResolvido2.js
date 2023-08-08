// faça uma função que tem um parâmetro chamado idade
// e que determina a faixa etária de uma pessoa a partir
// dessa idade. Sua função devera retornar um string que
// informa se a pessoa é jovem, adulto ou idoso.

function determinarFaixaEtaria(idade){
    if (idade <=21){
        return "jovem";
    }else if (idade <66){
        return "adulto(a)";
    }else {
        return "idoso(a)";
    }
}

//nao é obrigatorio guardar o retorno da função em um variavel
// a função é criada quando formos usar a variável outras vezes
const valorRetornadoPelaFuncao = determinarFaixaEtaria(38);
console.log(valorRetornadoPelaFuncao);