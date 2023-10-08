const mylibrary = [];

function Book(title, author, year, pages, isRead) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  if(isRead == 0){
    this.isRead = false;
  }
  else {
    this.isRead = true;
  }
  
}

function addBookToLibrary() {
  let No = document.getElementById("no-lib");
  let read = document.getElementById("no-read");
  No.innerHTML = mylibrary.length;
  let container = document.getElementById("show-books");
  container.innerHTML = "";
  read.innerHTML = 0;
  for (let x of mylibrary) {
    let bookz = document.createElement("div");
    bookz.classList.add("book");
    let headline = document.createElement("h3");
    headline.innerHTML = "BOOK";
    bookz.appendChild(headline);
    for (let [z, y] of Object.entries(x)) {
      let item = document.createElement("p");
      item.innerHTML = `${z} : ${y}`;
      bookz.appendChild(item);
      if (z == "isRead" && y) {
        let temp = Number(read.innerHTML);
        temp += 1;
        read.innerHTML = temp;
      }
    }
    container.appendChild(bookz);
  }
}

let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").value;

  let book = new Book(title, author, year, pages, isRead);
  mylibrary.push(book);

  form.reset();
  addBookToLibrary();
});
