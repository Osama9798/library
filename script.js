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
  createCards(myBooks);
  let remove = document.querySelector(".delete-button");
  remove.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
  });
}

function createCards(myBooks) {
  cardContainer.innerHTML = "";
  const body = document.querySelector("#body");
  myBooks.forEach((element) => {
    let card = document.createElement("article");
    let bName = document.createElement("h2");
    let auth = document.createElement("p");
    let pages = document.createElement("p");
    let stat = document.createElement("p");
    let remove = document.createElement("button");
    remove.type = "button";
    remove.innerHTML = "Delete";
    remove.classList.add("delete-button");
    card.appendChild(bName);
    card.appendChild(auth);
    card.appendChild(pages);
    card.appendChild(stat);
    card.appendChild(remove);
    bName.innerHTML = element.name;
    auth.innerHTML = element.author;
    pages.innerHTML = element.pages;
    stat.innerHTML = element.status;
    card.id = element.id;
    card.classList.add("card");
    cardContainer.appendChild(card);
  });
  body.appendChild(cardContainer);
}

const newBook = document.querySelector("#addBooks");
const newForm = document.querySelector("#form");
const cardContainer = document.createElement("div");

cardContainer.classList.add("card-container");
let bookName, author, page, bookStatus;
newBook.addEventListener("click", () => {
  newForm.classList.add("display");
});
newForm.addEventListener("submit", (event) => {
  event.preventDefault();
  bookName = document.querySelector("#bookName").value;
  author = document.querySelector("#authName").value;
  page = document.querySelector("#pages").value;
  bookStatus = document.querySelector("#status").value;
  addBook(bookName, author, page, bookStatus);
  document.querySelector("#addForm").reset();
  newForm.classList.remove("display");
});
