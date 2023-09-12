let { identificadorAula, instrutores, aulas } = require('../bancodedados')
const cadastrarAula = (req,res) => {
    const { IdInstrutor } = req.params;
    const {titulo, descricao} = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id = Number(IdInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe' });
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(IdInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);

}

module.exports = {
    cadastrarAula
}