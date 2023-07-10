/* Fazer um programa que verifica se um determinado texto
contém a letra H. Imprima o resultado
*/

const palavra = 'Alemanhhhha';

let encontrado = false; // inicia com false pois ainda nao foi encontrado nenhuma letra h

for(let letra of palavra){
    if( letra === 'h'){
        console.log('Tem a letra h');
        encontrado = true; // modifica a variavel encontrado para true
        break; // interrompe o código
    }
}

if (!encontrado){ //(encontrado === false)
    console.log('não tem h');
}

// seria colocado o else caso quisesse comparar para saber se
// a letra é ou não h