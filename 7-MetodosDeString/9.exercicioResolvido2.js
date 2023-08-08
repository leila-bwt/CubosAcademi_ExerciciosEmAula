// Fazer um programa que altere uma string no formato numero com virgulas
// para uso de ponto que estamos acostumados no Brasil

let numero = "1,350,000";

while (numero !== numero.replace(",", ".")){
numero = numero.replace(",", ".");
}

console.log(numero);

/**
 function replaceAll(original, text, newText){
    while (original !== original.replace(text, newText)){
        original = original.replace(text, newText);
    }
    return original
 }

 let numero = "1,350,000";
 console.log(replaceAll(numero, ",", "."));
 */



