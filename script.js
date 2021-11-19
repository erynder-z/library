let myLibrary = [];
let testBook = new Book("Moby Dick", "Hermann Melivlle", 808, "already red");

//Constructor function that makes "Book" objects.
function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}

function addBookToLibary() {
myLibrary.push(testBook);
console.log(myLibrary);
}