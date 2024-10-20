//Task 1
const fiction = new Section("Fiction");
const science = new Section("Science");
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);
regularPatron.borrowBook(book1);
vipPatron.borrowBook(book1);
regularPatron.returnBook(book1);
fiction.listBooks();
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);
//Task 2
class section {
    constructor(name, books) {
        this.name = name;
        this.books = "Harry Potter";
    }
function addBook(){
    const book1 = book2+ book3;
}
return Book;
function getAvailableBooks(){
    const book2 == book3={;}
}
return book2;
function listBooks(){
    const book1 = book1;
}
}
//Task 3
class Patron {
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = "Percy Jackson";
    }
function borrowBook(){
    const book1 = addBook;
}
return addBook;
function returnBook(){
    book3 = book2;
}
}
//Task 4
class VIPPatron {
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = "Percy Jackson";
    }
function borrowBook(){
    const book1 = addBook;
}
return addBook;
function priority(){
    book3 = book2;
}
}