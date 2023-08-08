// declaração tradicional - Mais usual
// em js toda função é içada 'hoisting' para cima de todo código
// por isso podemos chamar a função antes ou depois de declara-la

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

// declaração com arrow-function

const soma = (x, y) => {
    const resultado = x + y;
    return resultado
}

console.log(soma(5,2));