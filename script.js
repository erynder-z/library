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

Book.prototype.toggleReadStatus = function () {
    if (this.red === true) {
        this.red = false;
        return this.red;
    }
    return this.red = true;
}

//Displays Objects stored in libary.
function displayLibrary() {
    const bookShelf = document.getElementById("shelf");
    let nClose = document.createElement("div");
    nClose.classList.add("close");
    let nBook = document.createElement("div");
    nBook.classList.add("book");
    let mTitle = document.createElement("div");
    mTitle.classList.add("titlehead");
    let nTitle = document.createElement("div");
    nTitle.classList.add("title");
    let mAuthor = document.createElement("div");
    mAuthor.classList.add("authorhead");
    let nAuthor = document.createElement("div");
    nAuthor.classList.add("author");
    let mPages = document.createElement("div");
    mPages.classList.add("pageshead");
    let nPages = document.createElement("div");
    nPages.classList.add("pages");
    let mRead = document.createElement("div");
    mRead.classList.add("readhead")
    let nRead = document.createElement("input");
    nRead.setAttribute("type", "checkbox");
    nRead.classList.add("read");

    for (let i = 0; i < myLibrary.length; i++) {
        nClose.textContent = "X";
        mTitle.textContent = "Title:";
        nTitle.textContent = myLibrary[i].title;
        mAuthor.textContent = "Author:";
        nAuthor.textContent = myLibrary[i].author;
        mPages.textContent = "Pages:";
        nPages.textContent = myLibrary[i].pages;
        mRead.textContent = "finished?";
        nRead.textContent = myLibrary[i].red;

        bookShelf.appendChild(nBook);
        nBook.setAttribute("id", myLibrary.indexOf(myLibrary[i])); // use this ID to grab the object in the array and to operations on it
        nBook.appendChild(nClose);
        nBook.appendChild(mTitle);
        nBook.appendChild(nTitle);
        nBook.appendChild(mAuthor);
        nBook.appendChild(nAuthor);
        nBook.appendChild(mPages);
        nBook.appendChild(nPages);
        nBook.appendChild(mRead);
        nBook.appendChild(nRead);
        if (this.red === true) {
            nRead.setAttribute("checked", "true");
        }
    }
    activateRemoveButton();
    readToggleListener();
}

//Get input field values and push them to myLibary-Array.
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
    document.getElementById("readCheck").checked = false;
    hideInputs();
}

//Check if entered book is already red or not.
function checkRead() {
    if (document.getElementById("readCheck").checked === true) {
        return red = true;
    } else {
        return red = false;
    }
}

//Add new book button
const getNewBookButton = document.getElementById("newBookButton");
getNewBookButton.addEventListener("click", () => {
    showInputs();
});

//Shows input fields for new book
function showInputs() {
    document.getElementById("inputFields").classList.remove("hidden");
}

//Hides input fields for new book
function hideInputs() {
    document.getElementById("inputFields").classList.add("hidden");
}

//Generte a remove book button on each created book DOM object
function activateRemoveButton() {
    document.querySelectorAll(".close").forEach(item => {
        item.addEventListener("click", removeBookHelper)// ID of the corresponding Book object. Use this ID to target the corresponding object in the myLibrary-Array
        });
}

function removeBookHelper(item) {
    removeBook(item.target.parentNode.id);
}

//removes Book from myLibrary Array
function removeBook(parentNodeID) {
    document.getElementById(parentNodeID).remove();
    myLibrary.splice(parentNodeID, 1);
    return myLibrary;
}

//attach Event Listere on all .read-checkboxes
function readToggleListener() {
    document.querySelectorAll(".read").forEach(item => {
        item.addEventListener("click", readStatusHelper)
    });
} 

//run prototype function on selected object
function readStatusHelper(event) {
    myLibrary[event.target.parentNode.id].toggleReadStatus();
    return myLibrary;
}

