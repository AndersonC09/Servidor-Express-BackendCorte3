// push Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array

let number: number[] = [1, 2, 3];
number.push(4, 5);
console.log(number); // [1, 2, 3, 4, 5]

// pop Elimina el último elemento de un array y lo devuelve. Si el array está vacío, devuelve undefined.

let ultimoNumero = number.pop();
console.log(ultimoNumero);
console.log(number);
