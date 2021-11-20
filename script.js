const myLibrary = [];
const book1 = new Book("Moby Dick", "Hermann Melivlle", 808, "already red");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not red yet");

let newTitle;
let newAuthor;
let newPages;
let newRead;

const libTitle = document.createElement("P");
const libAuthor = document.createElement("P");
const libPages = document.createElement("P");
const libRead = document.createElement("P");

//Constructor function that makes "Book" objects.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayLibary() {
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
        document.body.appendChild(libTitle.cloneNode(true));
        document.body.appendChild(libAuthor.cloneNode(true));
        document.body.appendChild(libPages.cloneNode(true));
        document.body.appendChild(libRead.cloneNode(true)); //cloneNode copies the element before it appends the child so it wont just be overwritten
    }
}

//Get input field values and pushed them to myLibary-Array.
function addBookToLibary() {

    newTitle = document.getElementById("titleInput").value;
    newAuthor = document.getElementById("authorInput").value;
    newPages = document.getElementById("pagesInput").value;
    newRead = document.getElementById("readCheck").value;

    let newBook = new Book(newTitle, newAuthor, newPages, newRead);

    myLibrary.push(newBook);
    updateLibary();
    clearInput();
}

//Displays book in myLibary-Array.
function updateLibary() {
    para.innerText = "";
    for (let i = 0; i < myLibrary.length; i++) {
        para.innerText = myLibrary[i].title + myLibrary[i].author + myLibrary[i].pages + myLibrary[i].read;
        document.body.appendChild(para);
    }
}

//Clear input fields after input.
function clearInput() {
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    document.getElementById("readCheck").value = "";
}

displayLibary();

