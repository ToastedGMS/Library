const myLibrary = [
    {
        "title": "Bible",
        "author": "God ",
        "year": "2002"
    },
    {
        "title": "Bible 2",
        "author": "The Rock",
        "year": "2022"
    }
    //contains dummy objects for test purposes that SHOULD be deleted later
];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  // the constructor...
}
const subBtn = document.querySelector('.mainBtn');
function addBookToLibrary() {
    const bookInfo = document.querySelector('#bookInfo');
    
    subBtn.classList.add('subBtn');
    // creates the button that will access the user's input

    subBtn.addEventListener('click', function(event, bookInfo){
        event.preventDefault();
        const title = document.querySelector('#Title');
        const author = document.querySelector('#Author');
        const year = document.querySelector('#Year');

        if (title.value === '' || author.value === '' || year.value === ''){
            alert('Please fill all fields');
        }else {
        const newBook = new Book(title.value , author.value , year.value);
        myLibrary.push(newBook);}
        //creates the book object by taking user input, and pushes it into array
    })
}

function displayObj(){
    myLibrary.forEach(element => {
        const display = document.querySelector('.display');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'Title - ' + element.title + '; Author - ' + element.author + '; Year - ' + element.year;
        display.appendChild(newDiv);})
        //pulls each object from array and displays its properties on a div
}

function displayOnClick(){
    const sidebar = document.querySelector('.sidebar');
    subBtn.addEventListener('click', function(){
        
        const display = document.querySelector('.display');
        
        if (display.hasChildNodes()){
            while (display.firstChild){
                display.removeChild(display.firstChild)
            }
            displayObj()
        }else {
            displayObj()

        };})
        //calls the displayObj function on button click
}

function showForm(){
    const frm = document.querySelector('.sidebar');
    frm.classList.toggle('hidden');
}

addBookToLibrary()
displayOnClick()