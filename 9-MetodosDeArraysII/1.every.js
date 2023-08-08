/* Testa se todos os elementos do array passam pelo teste implementado
 * na função callback, passada como arcumento e retorna
    true ou false
 */

    const numeros = [1,2,3,4];
    numeros.every((elementoAtual) => {
        return elementoAtual < 5
    });
    console.log(elementoAtual);