function solucao(letra, palavras){
   let erros = 0;

   for (let palavra of palavras){
        const primeiraLetra = palavra[0]

        if (primeiraLetra !== letra){
            erros++;
        }
   }
   console.log(erros);
}