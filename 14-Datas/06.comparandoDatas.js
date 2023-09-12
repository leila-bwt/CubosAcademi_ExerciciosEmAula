const ontem = new Date("2002-06-30T12:22:00.000Z");
const ontem2 = new Date("2002-06-30T12:22:00.000Z");

console.log(ontem === ontem2);
//essa comparação dá erro pois compara o mesmo lugar de memória
//e não seu conteudo.

console.log(+ontem === +ontem2);
// quando se compara o timestamp esse erro nao acontece

