let dis = document.querySelector(".show");
let form = document.querySelector(".get");
let bookname = document.querySelector("#book-name");
let authorname = document.querySelector("#author-name");
let bookcontent = document.querySelector("#book-content");

alert("This website is help you to create a book and store in the page");
function make() {
    form.style.display = "block";
}

function del(event) {
    form.style.display = "none";
}

function added(event) {
    event.preventDefault(); 
    const book = {
        bookName: bookname.value,
        authorName: authorname.value,
        bookContent: bookcontent.value
    };
    saveToLocalStorage(book);

    addBookToDOM(book);

    bookname.value = '';
    authorname.value = '';
    bookcontent.value = '';
    form.style.display = "none";
}

function saveToLocalStorage(book) {
    let books = localStorage.getItem('books');
    books = books ? JSON.parse(books) : [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function addBookToDOM(book) {
    var box = document.createElement("div");
    box.setAttribute("class", "display");

    var p1 = document.createElement("p");
    p1.setAttribute("class", "bk-name");
    p1.textContent = `${book.bookName}`;

    var p2 = document.createElement("p");
    p2.setAttribute("class", "au-name");
    p2.textContent = `-${book.authorName}`;

    var p3 = document.createElement("p");
    p3.setAttribute("class", "bk-cont");
    p3.textContent = `${book.bookContent}`;

    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(p3);
    dis.appendChild(box);
}

window.onload = function() {
    let books = localStorage.getItem('books');
    books = books ? JSON.parse(books) : [];
    books.forEach(book => addBookToDOM(book));
}
