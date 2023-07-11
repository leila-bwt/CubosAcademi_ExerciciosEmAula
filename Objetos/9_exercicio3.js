/* Imprima o nome do cliente
 * Imprima a idade do cliente
    Modifique a idade do cliente
    Imprima a nova idade do cliente
    Imprima o nome do primeiro produto consumido
    Imprima o preço unitário do útimo produto consumido por ele
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
    

    
    console.log(cartao.nomeDoCliente);
    console.log(cartao.idadeDoCliente);

    cartao['idadeDoCliente'] = "25", // ou cartao.idade = 31;

    console.log(cartao.idadeDoCliente);

    console.log(cartao.produtosConsumidos[0].nome);
    console.log(cartao.produtosConsumidos[produtosConsumidos.length-1].precoUnidade)
   