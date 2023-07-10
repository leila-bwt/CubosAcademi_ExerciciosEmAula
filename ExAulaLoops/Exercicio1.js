/* criar um arrays com cinco nomes de paises
Adicionar um pais ao fim da lista
Imprimir a lista na tela
Remover um país no fim da lista
Imprimir na tela
Adicionar um país no inicio da lista
Imprimir na tela
Remover um país do inicio da lista
Imprimir lista na tela
Imprima o ultimo pais da lista na tela
Imprima o segundo país da lista na tela
Imprima o pais de indice 2 na tela
*/

const paises = ['Brasil', 'Espanha', 'Portugal', 'Canadá', 'França'];

paises.push('Alemanha'); // insere item ao final a lista
console.log (paises);

paises.pop();  // deleta ultimo item da lista
console.log(paises);

paises.unshift('México'); // add pais ao inicio da lista
console.log(paises);

paises.shift(); // remove primeiro item da lista
console.log(paises);

// imprimir ultimo item da lista
const ultimo = paises[paises.length -1]
console.log(ultimo);

// imprimir segundo item da lista
console.log(paises[1]);

// imprimir o pais de indice 2
console.log(paises[2]);


