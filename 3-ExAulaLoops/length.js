const nomesDeEstudantes = ['jose', 'maria', 'joao', 'pedro', 'joana', 'andre'];

// nomesDeEstudantes[6] = 'vitor';
// esse código é facilmente quebrado
// nao é recomendado que seja utilizado harcoders, ou seja
// escritas diretamente no código

nomesDeEstudantes[nomesDeEstudantes.length] = 'vitor';
// para adicionar um item no final da lista se usa o length
console.log(nomesDeEstudantes); // util para adicionar um elemento no final da lista por exemplo