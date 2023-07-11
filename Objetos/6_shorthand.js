const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
};

const minhaAltura = 1.62;
const pessoa = {
    nome : "Leila",
    altura: minhaAltura,
    peso: 55,
    carro //Object shorthand 
    // quando nome da variável é identico ao nome da 
    //propriedade pode deixar somente nome da variável.
    };

    console.log(pessoa);

/*

// Também é possivel declarar um objeto dentro de outro objeto

const pessoa = {
    nome : "Leila",
    altura: 1.62,
    peso: 55,
    carro: {
        marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 80
    } 
};
console.log(pessoa);
console.log(pessoa.carro);
console.log(pessoa.carro.marca);

*/