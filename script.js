const openBtn = document.getElementById("form-open");
const closeBtn = document.getElementById("form-close");
const formContainer = document.getElementById("form-pop-container");
const container = document.getElementById("container");


openBtn.addEventListener("click", () =>{
    formContainer.classList.add("open");
    container.style.filter = "blur(3px)";
});
closeBtn.addEventListener("click", () =>{
    formContainer.classList.remove("open");
    container.style.filter = "none";
});



const booksContainer = document.getElementById("bookscontainer");
const addBtn = document.getElementById("form-open");
const form = document.getElementById("form-pop");
const submitBtn = document.getElementById("add-book");
const readBtn = document.getElementById("form-read-button");
let bookRead = false; 
readBtn.style.backgroundColor = "red"

function addBook(){
    const book = document.createElement("div");
    book.setAttribute("class","book");
    booksContainer.appendChild(book);  

    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;

    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = "<strong>Title:</strong>" + newTitle;
    book.appendChild(title);
              
    const author = document.createElement("p");
    author.setAttribute("class", "author");
    author.innerHTML = "<strong>Author:</strong>" + newAuthor;
    book.appendChild(author);
    
    const pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.innerHTML = "<strong>Pages:</strong>" + newPages;
    book.appendChild(pages);

    const read = document.createElement("p");
    read.setAttribute("class", "pages");
    if (bookRead == true) {
        read.innerHTML = "<strong>Status:</strong>Read";
    } else {
        read.innerHTML = "<strong>Status:</strong>Not Read";
    }
    book.appendChild(read);
    
    
    booksContainer.appendChild(addBtn);
}


submitBtn.addEventListener("click", () =>{
    addBook();
    container.style.filter = "none";
    formContainer.classList.remove("open");
});

readBtn.addEventListener("click", () =>{
    if (bookRead == false) {
        readBtn.style.backgroundColor = "green"
        bookRead = true;
    }
    else{
        readBtn.style.backgroundColor = "red"
        bookRead = false
    }
});
