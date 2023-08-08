// transforme "leila biolcati borges"
// em Leila Biolcati Borges

const nome = "leila biolcati borges";
const arrayDeNomes = nome.split(" ");


let nomeFormatado = "";

for(let item of arrayDeNomes){
    // transformar a inicial de cada item em maiúscula
    let primeiraLetra = item.slice(0,1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado.trim());