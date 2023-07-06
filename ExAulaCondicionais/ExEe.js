/* Faça um programa para saber se uma pessoa pode ou não entrar
com a condição de :
Ter ingresso e idade maior ou igual a censura*/

const temIngresso = true;
const censura = 16;
const idade = 19;

if (temIngresso === true && idade >= censura){
    console.log("Pode entar.")
} else {
    console.log("Barrada.")
}