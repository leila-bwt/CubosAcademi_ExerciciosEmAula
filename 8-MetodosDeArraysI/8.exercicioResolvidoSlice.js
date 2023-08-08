function filtrar80(dados){
    const inicioIndice = Math.round(dados.length * 10/100); // tira 10% do começo
    // Math.round = arredonda para o numero mais próximo 
    const finalIndice = Math.floor(dados.length * 90/100); // tira 10% do final
    // Math.floor = arredonda para menos
    const fatia = dados.slice(inicioIndice, finalIndice);
    console.log(inicioIndice, finalIndice);
    console.log(fatia)
}

const dados = [0,1,5,7,10,33,55,60,57,85,45,68,
    49,57,89,69,57,33,24,11,5,3,1,0,0];

    filtrar80(dados); // chamando a função