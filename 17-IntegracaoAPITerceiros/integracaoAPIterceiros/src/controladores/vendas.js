const pool = require('../conexao');
const {criarToken, cobrar} = require('../stripe');

const venda = async (req, res) => {
    const {cliente_id, produto_id, quantidade, card} = req.body

    try {
        //>>teste para implementação do stripe<<
        //const {data: saldo} = await instanciaAxios.get('/balance');
        //trás somente o saldo disponível
        //return res.status(200).json(saldo);

        const cliente = await pool.query('SELECT * FROM clientes WHERE id = $1', [cliente_id]);
    
        if (cliente.rowCount < 1) {
            return res.status(404).json({mensagem: 'Cliente não encontrado'});
        }

        const produto = await pool.query('SELECT * FROM produtos WHERE id = $1', [produto_id]);
    
        if (produto.rowCount < 1) {
            return res.status(404).json({mensagem: 'Produto não encontrado'});
        }

        if(quantidade < 1){
            return res.status(400).json({mensagem: 'A quantidade é de no mínimo 1'});
        }

        const valorVenda = produto.rows[0].valor * quantidade;

        //const tokenCartao = await criarToken({card});
        const cobranca = await cobrar(valorVenda, 'tok_visa');

        const query = `INSERT INTO vendas (cliente_id, produto_id, quantidade, transacao_id)VALUES ($1, $2, $3, $4) returning *;`

        //transação via cartão de crédito
        const vendaRealizada = await pool.query(query, [
            cliente_id,
            produto_id,
            quantidade,
            cobranca.id
        ]);
        return res.status(201).json(cobranca);
    
    } catch (error) {
        if(error.response){
            return res.status(400).json({mensagem: error.response.data.error.message}); 
        }
        return res.status(500).json({mensagem: 'Erro interno do servidor...'});
    }
}

module.exports = {
    venda,
}