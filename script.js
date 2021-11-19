let myLibrary = [];
let testBook = new Book("Moby Dick", "Hermann Melivlle", 808, "already red");

//Constructor function that makes "Book" objects.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Push Book to myLibary.
function addBookToLibary() {
    myLibrary.push(testBook);
    const para = document.createElement("P");
    para.innerText = testBook.title + testBook.author + testBook.pages + testBook.read;
    document.body.appendChild(para);
}
