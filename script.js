const myBooks = [];
function Books(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}
function addBook(name, author, pages, status) {
  const book = new Books(name, author, pages, status);
  myBooks.push(book);
  console.log(myBooks);
}

const newBook = document.querySelector("#addBooks");
const newForm = document.querySelector("#form");
newBook.addEventListener("click", () => {
  newForm.classList.add("display");
});
const sumbit = document.querySelector("#submit");
newForm.addEventListener("submit", () => {
  newForm.classList.remove("display");
});
