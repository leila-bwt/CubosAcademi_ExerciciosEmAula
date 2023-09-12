const copa = new Date(2002, 5, 30, 8 );
const copaMaisUmaHora = +copa + 1000*60*60
const maisUmaHoraDate = new Date(copaMaisUmaHora);

console.log(maisUmaHoraDate);
// quando colocamos o sinal + geramos o timestamp, ou seja
// quantos segundos se passaram desde o inicio da contagem
// até o momento descrito na variável