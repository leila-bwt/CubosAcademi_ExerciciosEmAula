/*Fazer um programa para saber se uma pessoa
pode ou não entrar no cimena baseado nos seguintes critérios:
Ter ingresso, ter idade maior ou igual a censura
*/
const temIngresso = true;
const censura = 16;
const idade = 15;

if (temIngresso === true){
    if (idade >= censura){
        console.log("Pode entrar");
    } else {
    console.log("Barrada por censura.")
    }
} else {
    console.log("Barrada por falta de ingresso")
}