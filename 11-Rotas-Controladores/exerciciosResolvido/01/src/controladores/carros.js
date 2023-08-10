//importando banco de dados no controlador
const carros = require('../bancodedados');

const listagemCarros = (req, res) => {
    const {marca, cor} = req.query; // querry vai pegar todos os parâmetros de consulta que vem da rota
    let resultado = carros;

    if(marca){ // se a marca for informada
        resultado = resultado.filter((carro) => { // verificar se para cada carro
            return carro.marca === marca; // retornar de marca de carro -> marca
        });
    }

    if(cor){ // se a cor for informada
        resultado = resultado.filter((carro) => { // filtrar - verificar se para cada carro
            return carro.cor === cor; // retornar de cor de carro -> cor
        });
    }

    res.send(resultado);
}

const obterCarro = (req, res) => {
    const { id } = req.params; // params pega os parâmetros de rota da requisição

    const carroEncontrado = carros.find((carro) => { // find retorna apenas um elemento
        return carro.id === Number(id);
    }); 

    res.send(carroEncontrado);

}

module.exports = {
    listagemCarros,
    obterCarro
}