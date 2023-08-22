const myLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  // the constructor...
}

function addBookToLibrary() {
    const bookInfo = document.querySelector('#bookInfo');
    const subBtn = document.createElement('button');
    subBtn.classList.add('subBtn');
    bookInfo.appendChild(subBtn);
    // creates the button that will access the user's input

    subBtn.addEventListener('click', function(event, bookInfo){
        event.preventDefault();
        const title = document.querySelector('#Title');
        const author = document.querySelector('#Author');
        const year = document.querySelector('#Year');

        const newBook = new Book(title.value , author.value , year.value);
        myLibrary.push(newBook);
        
    })
}

addBookToLibrary()