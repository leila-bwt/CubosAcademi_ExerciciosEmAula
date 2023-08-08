let array = ["a", "b", "c", "d", "e"];
array.splice(1,2,"f");
console.log(array); // a, f, d, e

array = ["a", "b", "c", "d", "e"];
array.splice(1,2,"f", "g", "h");
console.log(array); // a, f, g, h, d, e

array = ["a", "b", "c", "d", "e"];
array.splice(1,0,"f"); // não apaga ninguém
console.log(array); // a, f, b, c, d, e

// array.push("f")
array = ["a", "b", "c", "d", "e"];
array.splice(array.length,0,"f"); // insere item no final da lista
console.log(array); // "a", "b", "c", "d", "e", "f"

// array.pop("e")
array = ["a", "b", "c", "d", "e"];
array.splice(array.length-1,1); // retira ultimo item do array
console.log(array); // "a", "b", "c", "d"

// array.shift()
array = ["a", "b", "c", "d", "e"];
array.splice(0,1);// deleta primeiro item do array
console.log(array); // "b", "c", "d", "e"

// array.unshift("f")
array = ["a", "b", "c", "d", "e"];
array.splice(0, 0, "f");// insere o 'f' no primeiro item do array
console.log(array); // "f", "a", "b", "c", "d", "e"