/*Na compra de um determinado produto, o cliente consegue um desconto
de 10% caso pague a vista.
Caso queira parcelar, a loja parcela em ate 6X sem juros mas sem descontos
OU entre 7X e 12X sendo aplicada uma taxa de juros de 1% ao mês. 
Antes de calcular o valor da parcela é preciso alcular o novo montante a pagar
de acordo com a seguinte fórmula: M = C.(1+i)^n
Imprima na tela uma mensagem explicando para o cliente como ele 
tem que pagar, incluindo o valor da parcela */

const valorDaCompra = 100;
const numeroDeParcelas = 13;

if(numeroDeParcelas === 1){
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar R$ ${valorAPagar}, pois à vista tem 10% de desconto.`);
}else if (numeroDeParcelas >= 2 && numeroDeParcelas <=6){
    //parcelado sem juros
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela.toFixed(2)}.`);
}else if(numeroDeParcelas >= 7 && numeroDeParcelas <=12){
    //parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1/100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela} totalizando R$${valorAPagarComJuros} devido a incidencia de juros.`)
}else {
    // numero de parcelas inválido
    console.log("Número de parcelas inválido.");
}