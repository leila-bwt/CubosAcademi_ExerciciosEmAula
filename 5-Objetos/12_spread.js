// ....spread = Significa espalhar

const pessoa = {
    nome : "Leila",
    idade: 38,
    cidade : "São Paulo",
    profissao: "Desenvolvedor"
};

const endereco = {
    rua : "Aqui",
    numero : 32,
    bairro : "Bairro Legal"
}

const objetoFundido = {
    ...pessoa, // pega todos os dados do objeto
    ...endereco,
    novoAtributo : "Parda",
};

console.log(objetoFundido);