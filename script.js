const openBtn = document.getElementById("form-open");
const closeBtn = document.getElementById("form-close");
const form = document.getElementById("form-pop-container");

openBtn.addEventListener("click", () =>{
    form.classList.add("open");
});
closeBtn.addEventListener("click", () =>{
    form.classList.remove("open");
});


const booksContainer = document.getElementById("bookscontainer");
const addBtn = document.getElementById("form-open");
const myLibrary = [
  {
    title:"1984",
    pages:328,
    author:"George Orwell",
    isRead:true
  },
  {
    title:"To Kill a Mockingbird",
    pages:281,
    author:"Harper Lee",
    isRead:false
  },
  {
    title:"The Greate Gatsby",
    pages:180,
    author:"F. Scott Fitzgerald",
    isRead:true
  },
  {
    title:"One Hundred Years of Solitude",
    pages:417,
    author:"Gabriel Garcia Marquez",
    isRead:false
  },
  {
    title:"Pride and Prejudice",
    pages:279,
    author:"Jane Austen",
    isRead:true
  },
  

];

function Book(title,pages,author,isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

function displayBooks(){
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.setAttribute("class","book");
    
    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = "<strong>Title:</strong>" + myLibrary[i].title;
              
    const author = document.createElement("p");
    author.setAttribute("class", "author");
    author.innerHTML = "<strong>Author:</strong>" + myLibrary[i].author;
    
    const pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.innerHTML = "<strong>Pages:</strong>" + myLibrary[i].pages;

    const status = document.createElement("p");
    status.setAttribute("class", "read");
    status.innerHTML = "<strong>Status:</strong>" + myLibrary[i].isRead

    const bookButtons = document.createElement("p");
    bookButtons.setAttribute("class","book-buttons")
    bookButtons.innerHTML = '<button class="read-button"><img src="assets/svg/book-open-svgrepo-com.svg" alt="Read" height="25px"></button><button class="remove-button"><img src="assets/svg/trash-xmark-alt-svgrepo-com.svg" alt="Delete" height="25px"></button>';

    booksContainer.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    book.appendChild(bookButtons);
    booksContainer.appendChild(addBtn);
  }
}
function addBookToLibrary() {
  // do stuff here
}

displayBooks();