let myLibrary = [];
let storageString;
let storageData;

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

Book.prototype.toggleReadStatus = function () {
    if (this.red === true) {
        this.red = false;
        return this.red;
    }
    return this.red = true;
}
}

//Theme functionalitty
function themeSwitch() {
    const flip = document.getElementById("theme-toggle");
    const lightToggle = document.getElementById("lightSwitch");
    const darkToggle = document.getElementById("darkSwitch");
    flip.addEventListener("click", () => {
        lightToggle.classList.toggle("dark");
        darkToggle.classList.toggle("light");

    });
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
        mRead.textContent = "Finished";
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
            nBook.classList.add("markRead");
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
    populateStorage();
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
    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", removeBookHelper)// ID of the corresponding Book object. Use this ID to target the corresponding object in the myLibrary-Array
        });
}

function removeBookHelper(item) {
    removeBook(item.target.parentNode.id);
}

//removes Book from myLibrary Array
function removeBook(parentNodeID) {
    document.getElementById(parentNodeID).remove();
    myLibrary.splice(parentNodeID, 1);
    populateStorage();
    return myLibrary;
}

//attach Event Listere on all .read-checkboxes
function readToggleListener() {
    document.querySelectorAll(".read").forEach(checkbox => {
        checkbox.addEventListener("click", readStatusHelper)
    });
} 

//run prototype function on selected object
function readStatusHelper(item) {
    item.target.parentNode.classList.toggle("markRead");
    myLibrary[item.target.parentNode.id].toggleReadStatus();
    populateStorage();
    return myLibrary;
}

//saves libary to localstorage
function populateStorage() {
    storageString = JSON.stringify(myLibrary);
    localStorage.setItem("localShelf", storageString);
}

//retrieves library from localstorage
function retrieveStorage() {
    let retrievedStorageString = localStorage.getItem("localShelf");
    storageData = JSON.parse(retrievedStorageString);
    mapData();
}

//maps storageData and converts it in book-objects
function mapData() {
    myLibrary = storageData.map(data =>
        new Book(data.title, data.author, data.pages, data.red)
    );
}

//displays book saved in localstorage
function initialLibrary() {
    const bookShelf = document.getElementById("shelf");
    for (let i = 0; i < myLibrary.length; i++) {
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
        nClose.textContent = "X";
        mTitle.textContent = "Title:";
        nTitle.textContent = myLibrary[i].title;
        mAuthor.textContent = "Author:";
        nAuthor.textContent = myLibrary[i].author;
        mPages.textContent = "Pages:";
        nPages.textContent = myLibrary[i].pages;
        mRead.textContent = "Finished";
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
        if (myLibrary[i].red === true) {
            nRead.setAttribute("checked", "true");
            nBook.classList.add("markRead");
        }
    }
    activateRemoveButton();
    readToggleListener();
}

retrieveStorage();
initialLibrary();
themeSwitch();


