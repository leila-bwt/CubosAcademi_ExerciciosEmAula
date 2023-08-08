/**Criar um objeto que represente o cartão de consumo
 *  de um cliente. Deve ter:
 * Nome, idade, produtos consumidos.
 * Cada produto pode ter:
 * Nome do produto, preço unitário(em centavos), quantia comprada
 */

const cartao = {
        nomeDoCliente : "Leila",
        idadeDoCliente: 38,
        produtosConsumidos : [
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
    ]
}

console.log(cartao);