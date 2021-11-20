const myLibrary = [];

let newTitle;
let newAuthor;
let newPages;
let newRead;

//Constructor function that makes "Book" objects.
function Book(title, author, pages, red) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.red = red;
}

//Displays Objects stored in libary.
function displayLibrary() {
    const bookShelf = document.getElementById("shelf");
    let nBook = document.createElement("div");
        nBook.classList.add("book");
    let nTitle = document.createElement("div");
        nTitle.classList.add("title");
    let nAuthor = document.createElement("div");
        nAuthor.classList.add("author");
    let nPages = document.createElement("div");
    nPages.classList.add("pages");
    let nRead = document.createElement("div");
        nRead.classList.add("read")

    for (let i = 0; i < myLibrary.length; i++) {
        nTitle.textContent = myLibrary[i].title;
        nAuthor.textContent = myLibrary[i].author;
        nPages.textContent = myLibrary[i].pages;
        nRead.textContent = myLibrary[i].red;

        bookShelf.appendChild(nBook);
        nBook.appendChild(nTitle);
        nBook.appendChild(nAuthor);
        nBook.appendChild(nPages);
        nBook.appendChild(nRead);
    }
}

//Get input field values and pushed them to myLibary-Array.
function addBookToLibary() {

    newTitle = document.getElementById("titleInput").value;
    newAuthor = document.getElementById("authorInput").value;
    newPages = document.getElementById("pagesInput").value;
    checkRead();
    

    let newBook = new Book(newTitle, newAuthor, newPages, red);

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

//Check if entered book is already red or not.
function checkRead() {
    if(document.getElementById("readCheck").checked === true) {
        return red = true;
    }else {
        return red = false;
    }
}


