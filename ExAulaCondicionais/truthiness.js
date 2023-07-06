const x = 1;
const nome = "";

if(x){
    console.log("Truthy")
} else {
    console.log("Falsy");
}

if(!nome){ // se NÃO tiver nome, ou seja, String vazio (nome === "")
    console.log("Por favor, preencha seu nome:")
}

/* Em JavaScript , um valor verdadeiro é um valor considerado
*true quando encontrado em um contexto booleano.
* Todos os valores são verdadeiros, a menos que sejam 
*definidos como falsos . Ou seja, todos os valores são verdadeiros,
 exceto false, 0, -0, 0n, , , e .""null, undefined, NaN */