/*Book list steps
1. type in details for each book
2. click submit
3. when it submits it will save it and take it to the lcocal storage
4. Alert will come up saying that it was successfully added
4. the book details will then be displayed in the table
4. if the user has not completed putting all teh details down, and alert will come up saying that all details must be filled in */
/* Classes and events to think about
-Book class
-UI Class : handle UI Tasks 
-Store class: Handles Storage
-Event: Display books
Event 2: Add book
Event 3: Remove a book*/

//Book class: Receiving the books

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: handle task

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "The Forehead",
        author: "Mica Mouse",
        isbn: 7878654,
      },
      {
        title: "Bunnies Around",
        author: "John Doe",
        isbn: 7878231,
      },
    ];

    let booksAdded = storedBooks;

    booksAdded.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}<td/>
    <td>${book.author}<td/>
    <td>${book.isbn}<td/>
    <td><a href ="#" class= "btn btn-danger btn-sm delete">X</a><td/>`; //check

    list.appendChild(row); //check
  }

  static clearFields() {
    document.querySelector("#title-details").value = "";
    document.querySelector("#author-details").value = "";
    document.querySelector("#isbn-details").value = "";
  }

  static deleteBook(targetel) {
    if (targetel.classList.contains("delete")) {
      targetel.parentElement.parentElement.remove();
    }
  }
}

/*assigning potential book/value to elements*/

//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//EVENT : Add a book

document.querySelector("#book-form").addEventListener("submit", function (e) {
  //Prevent actual submit dfault
  //e.preventDefault();

  //Get the form values and assign them
  const title = document.getElementById("title-details").value;
  const author = document.getElementById("author-details").value;
  const isbn = document.getElementById("isbn-details").value;

  //Validate
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields. Thank you.");
  } else {
    //Instantiate book in order to receive the boook and store it in an object
    const chosenBook = new Book(title, author, isbn);

    //Add book to UI
    UI.addBookToList(chosenBook);

    //Clear fields
    UI.clearFields();
  }
});

//Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (deleting) => {
  UI.deleteBook(deleting.target);
});
