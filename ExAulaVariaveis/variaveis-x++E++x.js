let x = 10;
// x = x + 1;
// x += 1;
x++;
console.log(x);

let y = 15;
y--;
console.log(y);

y = ++x;
console.log("X: ", x);
console.log("Y: ", y);

/* quando se coloca o x++ ele primeiro incrementa um valor
*para depois associar a outra variável.
*Ja quando usamos o ++x, primeiro é retornado o valor da variavel
para depois realizar a operação, incremento*/