//PUNTO 1

// 1.1 agregarle al array por medio de push 10 12 15 16 17
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

auxNumber.push(10, 12, 15, 16, 17);
console.log(auxNumber, 'auxNumber con push');

// 1.2 eliminar el ultimo elemento con .pop
auxNumber.pop();
console.log(auxNumber, 'auxNumber con pop');

// 1.3 encontrar el indice de un elemento,con idexof en este caso del 1 el 4 y el 7
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);

console.log(index1, 'index1');
console.log(index4, 'index4');
console.log(index7, 'index7');

// 1.4 extraer una parte del array con slice, desde la posicion 2 hasta la 9
const sliceArray = auxNumber.slice(2,9);
console.log(sliceArray, 'sliceArray');

// 1.5 verificar si todos los elementos son mayores que 1 por every, retornar respuesta booleano
const greaterThatOne = auxNumber.every(num=> num >1);
console.log(greaterThatOne, 'greaterThatOne con every');

// 1.6 verificar si algun elemento sea mayor o igual que 7 con some
const greaterOEqualThanSeven = auxNumber.some(num => num >=7);
console.log(greaterOEqualThanSeven, 'greaterOEqualThanSeven');

//PUNTO 2

const auxString: string[] = ['1','2','3','4','5','6','7'];

// 2.1 agregarle al array por medio de push el 10 pero en tipo string, el 11 tipo string 12,13,14 tipo string
auxString.push('10','11','12','13','14');
console.log(auxString, 'auxString');

// 2.2 encontrar el indice de un elemento, en este caso el 10 el 11 y el 14 con indexof
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');

console.log(index10, 'index10');
console.log(index11, 'index10');
console.log(index14, 'index10');

//PUNTO 3

const message: string = 'Bienvenidos al ITP';

// 3.1 dividir la cadena en un array donde el separador sea el espacio por split, a la salida de este,
//le aplicamos un join, este separarlo por comas
const arrayMessage = message.split(' ');
const joinedMessage = arrayMessage.join(',');

console.log(arrayMessage, 'arrayMessage');
console.log(joinedMessage, 'joinedMessage');

//PUNTO 4

const names: string = 'Michael, anderson, yadir, kevin, emerson';
// 4.1 dividir la cadena en un array de palabras, donde el separador sea las comas por split
// a este array aplicar el join donde separe las palabras con espacios

const arrayNames = names.split(', ');
const joinedNames = arrayNames.join(' ');

console.log(arrayNames, 'arrayNames');
console.log(joinedNames, 'joinedNames');

//PUNTO 5

const arrayProducts: any[] = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscount: 700
    },
    {
        id: 2,
        name: 'atún',
        price: 2500,
        priceDiscount: 1500
    }
];

// 5.1 filtrar en una constante donde price sea mayor de 900 por medio de filter y por medio de un for

// usando filter
const filteredProducts = arrayProducts.filter(product => product.price > 900);
console.log(filteredProducts, 'filteredProducts');

// usando for
const filteredProductsFor: any[] = [];

for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        filteredProductsFor.push(arrayProducts[i]);
    }
}

console.log(filteredProductsFor, 'filteredProductsFor');

// 5.2 encontrar el primer objeto del array donde el priceDiscount sea mayor que 500 con find

const firstDiscountedProduct = arrayProducts.find(product => product.priceDiscount > 500);

console.log(firstDiscountedProduct, 'firstDiscountedProduct');

// 5.3 encontrar el indice del primer elemento del array donde el price sea mayor que 1000 con indexOf
const index = arrayProducts.findIndex(product => product.price > 1000);
console.log(index, 'index');

// 5.4 al array añadirle 3 nuevos objetos de una tienda por medio de push
arrayProducts.push(
    {
        id: 3,
        name: 'bonbon',
        price: 500,
        priceDiscount: 200
    },
    {
        id: 4,
        name: 'leche',
        price: 7000,
        priceDiscount: 1000
    },
    {
        id: 5,
        name: 'carne',
        price: 8000,
        priceDiscount: 600
    }
);

console.log(arrayProducts, 'arrayProducts');

//PUNTO 6
const arrayO1: number[] = [1,2,3,4];
const arrayO2: number[] = [6,7,8,9];
//concatenar el array 1 con array 2 por medio de concat y push

// 6.1 usando concat
const concatArray1Yarray2 = arrayO1.concat(arrayO2);
console.log(concatArray1Yarray2, 'concatArray1Yarray2');

//usando push
arrayO1.push(...arrayO2);
console.log(arrayO1, 'arrayO1');

// 6.2 Ordenar de forma ascendente usando sort
const sortedArray = concatArray1Yarray2.sort();
console.log(sortedArray, 'sorteArray');

// 6.3 Ordenar de forma descendente usando reverse
concatArray1Yarray2.reverse();
console.log(concatArray1Yarray2, 'reverseArray');
