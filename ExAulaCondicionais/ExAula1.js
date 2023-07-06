/*Na compra de um determinado produto, o cliente consegue um desconto
de 10% caso pague a vista.
Caso queira parcelar, a loja parcela em ate 6X sem juros mas sem descontos.
Imprima na tela uma mensagem explicando para o cliente como ele 
tem que pagar, incluindo o valor da parcela */

let valorDaCompra = 100;
let numeroDeParcelas = 3;

if(numeroDeParcelas === 1){
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto
    console.log(`Você deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto.`);
}else {
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela.toFixed(2)}.`);
}