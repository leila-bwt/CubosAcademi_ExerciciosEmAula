/**Fazer um programa que permita a entrada ou não
 * de uma pessoa dadas as seguintes condições:
 * ter ingresso E ter idade maior ou igual a censura
 * OU estar com os pais*/

const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComPais = false;

if(temIngresso){ // boolean dentro dos parenteses no if sempre será true
    if (idade >= censura || estaComPais){
        console.log("Pode entrar");
    } else {
        console.log("Barrada")
    }
}else{
    console.log("Barrada");
}