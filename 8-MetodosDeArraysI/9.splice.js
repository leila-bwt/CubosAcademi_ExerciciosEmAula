const lista = ["a", "b", "c", "d", "e"];
lista.splice(1,2,"f"); // primeiro argumento é o indice a ser modificado
// segundo argumento é quantidade de valores que queremos apagar
console.log(lista);
// ['a', 'f', 'd', 'e']