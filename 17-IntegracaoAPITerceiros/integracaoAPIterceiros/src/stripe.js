const instanciaAxios = require('./api');
const qs = require('qs');

const criarToken = async (card) => {
    const dadosCartao = qs.stringify(card);
    const {data: tokenCartao} = await instanciaAxios.post('/tokens', dadosCartao);
    return tokenCartao;
}

const cobrar = async(amount, token) => {
    const dadosCobranca = qs.stringify({//converte para o formato x-www-form-urlencoded
        amount,
        currency: 'brl',
        source: tokenCartao
    });
    const{data: cobranca} = await instanciaAxios.post('/charges', dadosCobranca); 

    return cobranca;
};

module.exports = {
    criarToken,
    cobrar
};