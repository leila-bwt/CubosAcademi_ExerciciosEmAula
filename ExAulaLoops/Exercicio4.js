/* Faça um programa que conta quantas letras 'a'
existem numa determinada palavra. 
Imprima o resultado na tela
 */

const palavra = 'abracadabra';

let quantidade = 0;


for(let letra of palavra){
    if( letra === 'a'){
        quantidade++;
    }
}
console.log(`Tem ${quantidade} letras 'a'`);

