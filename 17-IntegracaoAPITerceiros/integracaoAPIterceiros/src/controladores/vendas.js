const venda = async (req, res) => {
    const {cliente_id, produto_id, quantidade} = req.body

    try {
        const cliente = await pool.query('SELECT * FROM clientes WHERE id = $1', [cliente_id]);
    
        if (cliente.rowCount < 1) {
            return res.status(404).json({mensagem: 'Cliente não encontrado'});
        }

        const produto = await pool.query('SELECT * FROM clientes WHERE id = $1', [produto_id]);
    
        if (produto.rowCount < 1) {
            return res.status(404).json({mensagem: 'Produto não encontrado'});
        }

        if(quantidade < 1){
            return res.status(400).json({mensagem: 'A quantidade é de no mínimo 1'});
        }

        const query = `
            INSERT INTO vendas
                (cliente_id, produto_id, quantidade)
            VALUES ($1, $2, $3) returning *;`

        //transação via cartão de crédito
        const vendaRealizada = await pool.query(query[cliente_id, produto_id, quantidade]);
        return res.status(201).json(vendaRealizada.rows[0]);
    
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'});
    }
}

module.exports = {
    venda,
}