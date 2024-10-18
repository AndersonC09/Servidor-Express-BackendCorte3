// 1. Declara variables utilizando todos los tipos primitivos mencionados
let isStudent: boolean = true;
console.log(isStudent, 'isStudent');

let age: number = 25;
console.log(age, 'age');

let pi: number = 3.1416;
console.log(pi, 'pi');

let person: string = "Yadir Muñoz";
console.log(person, 'person');

let emptyValue: null = null;
console.log(emptyValue, 'emptyValue');

let notAssigned: undefined = undefined;
console.log(notAssigned, 'notAssigned');

//2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros
function calculateAreaRectangle(base: number, height: number): number {
    return (base * height);
}

let base = 12;
let height = 7;
let area = calculateAreaRectangle(base, height);
console.log(`El área del rectángulo es: ${area}`);

// 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Car:  ${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car("KIA", "SPORTAGE", 2010);
myCar.showInfo();


// 4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz

interface Shape {
    calculAtearea(): number;
}

class Rectangle implements Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    // método calcularArea
    calculAtearea(): number {
        return (this.base * this.height);
    }
}

// ejemplo de uso
const rectangle = new Rectangle (15, 9);
console.log('El area del rectangulo es: ', rectangle.calculAtearea(), 'rectangle');


// 5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico.

const books: {title: string, author: string, year: number} [] = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {   title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {   title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {   title: 'Animal Farm',
        author: 'George Orwell',
        year: 1945
    },
    {   title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    }
];

const authorFilter = books.filter(aut=> aut.author === 'George Orwell');
console.log('Autor espesifico usando filter: ', authorFilter, 'authorFilter');

/*
6. Crea un pequeño programa que utilice todos los conceptos anteriores:

- Define una interfaz Book que tenga title, author, y year.

- Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.

- Usa métodos de clase y arreglos para interactuar con la biblioteca.
*/


interface Book {
    title: string;
    author: string;
    year: number;
}

class Library {
    private books: Book[] = [];

    // Método
    addBook(book: Book): void {
    this.books.push(book);
    }

    // Método para buscar libros por autor
    findBooksByAuthor(author: string): Book[] {
    return this.books.filter(book => book.author === author);
    }

    showAllBooks(): void {
    console.log('Libros en la biblioteca:');
    this.books.forEach(book => {
        console.log(`${book.title}, por ${book.author}, publicado en ${book.year}`);
    });
    }
}

  // Crear una instancia de la clase Library
const myLibrary = new Library();

myLibrary.addBook({ title: 'Cien años de soledad', author: 'Gabriel García Márquez', year: 1967 });
myLibrary.addBook({ title: '1984', author: 'George Orwell', year: 1949 });
myLibrary.addBook({ title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez', year: 1985 });

myLibrary.showAllBooks();

  // Buscar libros por autor
const booksByGarciaMarquez = myLibrary.findBooksByAuthor('Gabriel García Márquez');
console.log('\nLibros de Gabriel Garcia Marquez:');
booksByGarciaMarquez.forEach(book => {
    console.log(`${book.title}, publicado en ${book.year}`);
});

/* 8. Uso de ciclos
    1. Escribe un programa que sume todos los números pares del 1 al 100
	2. Contar números impares con while, que hay entre 1 y 30.
	3. Imprimir números primos con for y if
*/

// SOLUCION 8.1
let addPairs: number = 0;

for(let  i=1; i<=100; i++ ){
    if(i % 2 === 0){
        addPairs += i;
    }
}
console.log('La suma de los numeros pares del 1 al 100 son: ', addPairs);

// SOLUCION 8.2
let addOdd: number = 0;
let num: number = 1;

while(num <=100){
    if(num %2 !==0){
        addOdd ++;
    }
    num++;
}

console.log('La cantidad de numeros impares que hay entre 1 y 100 son: ',addOdd);

// SOLUCION 8.3

function isCousin(num:number): boolean {
    if(num <=1) return false;
    for(let i = 2; i < num; i++){
        if(num % i ===0){
            return false;
        }
    }
    return true;
}


console.log('Los numeros primos entre 1 y 100 son:');
for(let i=1; i<=100; i++){
    if(isCousin(i)){
        console.log(i);
    }
}
