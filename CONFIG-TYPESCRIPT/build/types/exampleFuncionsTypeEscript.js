const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log(auxNumber, 'auxNumber con push');
auxNumber.pop();
console.log(auxNumber, 'auxNumber con pop');
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log(index1, 'index1');
console.log(index4, 'index4');
console.log(index7, 'index7');
const sliceArray = auxNumber.slice(2, 9);
console.log(sliceArray, 'sliceArray');
const greaterThatOne = auxNumber.every(num => num > 1);
console.log(greaterThatOne, 'greaterThatOne con every');
const greaterOEqualThanSeven = auxNumber.some(num => num >= 7);
console.log(greaterOEqualThanSeven, 'greaterOEqualThanSeven');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, 'auxString');
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log(index10, 'index10');
console.log(index11, 'index11');
console.log(index14, 'index14');
const message = 'Bienvenidos al ITP';
const arrayMessage = message.split(' ');
const joinedMessage = arrayMessage.join(',');
console.log(arrayMessage, 'arrayMessage');
console.log(joinedMessage, 'joinedMessage');
const names = 'Michael, anderson, yadir, kevin, emerson';
const arrayNames = names.split(', ');
const joinedNames = arrayNames.join(' ');
console.log(arrayNames, 'arrayNames');
console.log(joinedNames, 'joinedNames');
const arrayProducts = [
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
const filteredProducts = arrayProducts.filter(product => product.price > 900);
console.log(filteredProducts, 'filteredProducts');
const filteredProductsFor = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        filteredProductsFor.push(arrayProducts[i]);
    }
}
console.log(filteredProductsFor, 'filteredProductsFor');
const firstDiscountedProduct = arrayProducts.find(product => product.priceDiscount > 500);
console.log(firstDiscountedProduct, 'firstDiscountedProduct');
const index = arrayProducts.findIndex(product => product.price > 1000);
console.log(index, 'index');
arrayProducts.push({
    id: 3,
    name: 'bonbon',
    price: 500,
    priceDiscount: 200
}, {
    id: 4,
    name: 'leche',
    price: 7000,
    priceDiscount: 1000
}, {
    id: 5,
    name: 'carne',
    price: 8000,
    priceDiscount: 600
});
console.log(arrayProducts, 'arrayProducts');
const arrayO1 = [1, 2, 3, 4];
const arrayO2 = [6, 7, 8, 9];
const concatArray1Yarray2 = arrayO1.concat(arrayO2);
console.log(concatArray1Yarray2, 'concatArray1Yarray2');
arrayO1.push(...arrayO2);
console.log(arrayO1, 'arrayO1');
const sortedArray = concatArray1Yarray2.sort();
console.log(sortedArray, 'sorteArray');
concatArray1Yarray2.reverse();
console.log(concatArray1Yarray2, 'reverseArray');
//# sourceMappingURL=exampleFuncionsTypeEscript.js.map