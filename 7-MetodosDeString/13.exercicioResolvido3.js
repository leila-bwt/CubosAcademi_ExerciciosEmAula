/** Faça uma funçao chamada imprimir data que tem 3 parâmetros:
 * dia, mês e ano.
 Essa função deve imprimir na tela a data passada como argumento
 no seguinte formato, de modo que ela sempre tenha 8 dígitos no total*/

 function imprimirData(dia, mes, ano){
    const diaFormatado = String(dia).padStart(2, "0");
    // vai transformar o tipo number em String

    const mesFormatado = String(mes).padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
 }
 imprimirData(18, 2, 2021); // declaração de variavel do tipo number