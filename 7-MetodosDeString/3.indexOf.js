// metodo que serve para saber onde está determinado texto
// dentro de outro texto. Retorna o numero da primeira ocorrência
// se nao encontrar retorna -1

//Exemplo: email válido
// > tem que ter pelo menos um @
// > tem que ter pelo menos um ponto depois do @

const email = "emaildeteste@cubos.com";

const indexArroba = email.indexOf("@");
// mostra indice do '@' no texto = 4

const indexPonto = email.indexOf(".", indexArroba);
// vai começar a procurar depois do indexArroba

if (indexPonto > indexArroba){
    console.log("Email atende as requisições.")
} else {
    console.log("Não há nenhum ponto após o @")
}


