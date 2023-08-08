/** Faça um programa que imprime uma mensagem amigável
 * (que inclui chamar o client pelo nome)
que informa o valor que ele deve pagar 
*/

const produtosConsumidos = [
    {
        nome : "batata frita",
        precoUnidade: 10.50,
        quantidade: 2,
    },

    {
        nome : "torresmo",
        precoUnidade: 7.80,
        quantidade: 1,
    },

    {
        nome : "suco de fruta",
        precoUnidade: 13.90,
        quantidade: 1,
    }
];

const cartao = {
        nomeDoCliente : "Leila",
        idadeDoCliente: 38,
        produtosConsumidos //Object shorthand 
};

let somaProdutos = 0
for(let produto of produtosConsumidos){
    somaProdutos += produto.precoUnidade * produto.quantidade;
}

console.log(`Sr(a) ${cartao.nomeDoCliente},
o total a pagar é R$${somaProdutos.toFixed(2)}`);
//sempre configura o valor no momento da impressão