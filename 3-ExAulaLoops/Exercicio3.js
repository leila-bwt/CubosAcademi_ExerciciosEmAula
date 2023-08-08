/* Fazer um programa que calcula e imprime na tla
a soma dos itns de um array */

const numeros = [15, 22, 68, 32, 1, 97 ];

let soma = 0;

for(let n = 0; n < numeros.length; n++){
    soma = soma + numeros[n]
    // soma += numeros[i]
    console.log(soma);
}
/*
se console.log for colocado fora do for, será
impresso unica soma total
*/ 
