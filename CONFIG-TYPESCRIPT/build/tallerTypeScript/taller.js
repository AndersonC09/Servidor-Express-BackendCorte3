let isStudent = true;
console.log(isStudent, 'isStudent');
let age = 25;
console.log(age, 'age');
let pi = 3.1416;
console.log(pi, 'pi');
let person = "Yadir Muñoz";
console.log(person, 'person');
let emptyValue = null;
console.log(emptyValue, 'emptyValue');
let notAssigned = undefined;
console.log(notAssigned, 'notAssigned');
function calculateAreaRectangle(base, height) {
    return (base * height);
}
let base = 12;
let height = 7;
let area = calculateAreaRectangle(base, height);
console.log(`El área del rectángulo es: ${area}`);
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car:  ${this.make} ${this.model} ${this.year}`);
    }
}
let myCar = new Car("KIA", "SPORTAGE", 2010);
myCar.showInfo();
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculAtearea() {
        return (this.base * this.height);
    }
}
const rectangle = new Rectangle(15, 9);
console.log('El area del rectangulo es: ', rectangle.calculAtearea(), 'rectangle');
const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    { title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    { title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    { title: 'Animal Farm',
        author: 'George Orwell',
        year: 1945
    },
    { title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    }
];
const authorFilter = books.filter(aut => aut.author === 'George Orwell');
console.log('Autor espesifico usando filter: ', authorFilter, 'authorFilter');
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    showAllBooks() {
        console.log('Libros en la biblioteca:');
        this.books.forEach(book => {
            console.log(`${book.title}, por ${book.author}, publicado en ${book.year}`);
        });
    }
}
const myLibrary = new Library();
myLibrary.addBook({ title: 'Cien años de soledad', author: 'Gabriel García Márquez', year: 1967 });
myLibrary.addBook({ title: '1984', author: 'George Orwell', year: 1949 });
myLibrary.addBook({ title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez', year: 1985 });
myLibrary.showAllBooks();
const booksByGarciaMarquez = myLibrary.findBooksByAuthor('Gabriel García Márquez');
console.log('\nLibros de Gabriel Garcia Marquez:');
booksByGarciaMarquez.forEach(book => {
    console.log(`${book.title}, publicado en ${book.year}`);
});
let addPairs = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        addPairs += i;
    }
}
console.log('La suma de los numeros pares del 1 al 100 son: ', addPairs);
let addOdd = 0;
let num = 1;
while (num <= 100) {
    if (num % 2 !== 0) {
        addOdd++;
    }
    num++;
}
console.log('La cantidad de numeros impares que hay entre 1 y 100 son: ', addOdd);
function isCousin(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log('Los numeros primos entre 1 y 100 son:');
for (let i = 1; i <= 100; i++) {
    if (isCousin(i)) {
        console.log(i);
    }
}
//# sourceMappingURL=taller.js.map