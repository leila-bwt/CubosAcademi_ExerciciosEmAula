// Faça uma função que recebe parâmetros do tipo string e
// imprime na tela essa string invertida, ou seja,
// de trás para frente.

//Dica: lembre-se que o método reverse() só pode ser chamado
// por ARRAYS

function inverterString(texto){
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = "";
    for (let letras of arrayDeLetras){
        textoInvertido += letras;
    }
    console.log(textoInvertido);

}


inverterString("Cubos Academy");

