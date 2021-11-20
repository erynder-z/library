const myLibrary = [];
const book1 = new Book("Moby Dick", "Hermann Melivlle", 808, "already red");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not red yet");

let newTitle;
let newAuthor;
let newPages;
let newRead;

//Constructor function that makes "Book" objects.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Displays Objects stored in libary.
function displayLibrary() {
    const bookShelf = document.getElementById("shelf");
    let nBook = document.createElement("div");
    let nTitle = document.createElement("div");
    let nAuthor = document.createElement("div");
    let nPages = document.createElement("div");
    let nRead = document.createElement("div");

    for (let i = 0; i < myLibrary.length; i++) {
        nTitle.textContent = myLibrary[i].title;
        nAuthor.innerText = myLibrary[i].author;
        nPages.innerText = myLibrary[i].pages;
        nRead.innerText = myLibrary[i].read;

        bookShelf.appendChild(nBook);
        nBook.appendChild(nTitle);
        nBook.appendChild(nAuthor);
        nBook.appendChild(nPages);
        nBook.appendChild(nRead);
    }
}
/* function displayLibary() {
    myLibrary.push(book1);
    myLibrary.push(book2);
    libTitle.innerText = "";
    libAuthor.innerText = "";
    libPages.innerText = "";
    libRead.innerText = "";
    for (let i = 0; i < myLibrary.length; i++) {
        libTitle.innerText = myLibrary[i].title;
        libAuthor.innerText = myLibrary[i].author;
        libPages.innerText = myLibrary[i].pages;
        libRead.innerText = myLibrary[i].read;
        bookShelf.appendChild(libTitle.cloneNode(true));
        bookShelf.appendChild(libAuthor.cloneNode(true));
        bookShelf.appendChild(libPages.cloneNode(true));
        bookShelf.appendChild(libRead.cloneNode(true)); //cloneNode copies the element before it appends the child so it wont just be overwritten
    }
} */

//Get input field values and pushed them to myLibary-Array.
function addBookToLibary() {

    newTitle = document.getElementById("titleInput").value;
    newAuthor = document.getElementById("authorInput").value;
    newPages = document.getElementById("pagesInput").value;
    newRead = document.getElementById("readCheck").value;

    let newBook = new Book(newTitle, newAuthor, newPages, newRead);

    myLibrary.push(newBook);
    displayLibrary();
    clearInput();
}

//Clear input fields after input.
function clearInput() {
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    document.getElementById("readCheck").value = "";
}


