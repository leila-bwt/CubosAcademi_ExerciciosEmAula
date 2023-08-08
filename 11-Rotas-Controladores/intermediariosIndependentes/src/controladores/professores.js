//importar os dados de 'professores' em banco de dados
const professores = require('../bancodedados');

const filtrarProfessores = (requisicao, resposta) => {
    const {stack} = requisicao.query; // desestruturação
    let resultado = professores;

    console.log('cheguei no controlador de listagem do professor');

    if(stack){
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    }

    resposta.send(resultado);
}

const encontrarUmProfessor = (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id)
    });
    resposta.send(professorEncontrado);
}

// criar um objeto para exportar os controladores
module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}