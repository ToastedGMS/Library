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
    // creates the button that will access the user's input

        event.preventDefault();
        const title = document.querySelector('#Title');
        const author = document.querySelector('#Author');
        const year = document.querySelector('#Year');

        if (title.value === '' || author.value === '' || year.value === ''){
            alert('Please fill all fields');
        }else {
        const newBook = new Book(title.value , author.value , year.value);
        myLibrary.push(newBook);}
        displayOnClick()
        
        //creates the book object by taking user input, pushes it into array and calls function to display books onscreen
}

function displayObj(){
    myLibrary.forEach(element => {
        const display = document.querySelector('.display');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'Title - ' + element.title + '; Author - ' + element.author + '; Year - ' + element.year;
        display.appendChild(newDiv);})
        //pulls each object from array and displays its properties on a div
}

function showForm(){
    document.querySelector('.sidebar').classList.toggle('hidden');

    if (document.querySelector('.shwForm').innerHTML === 'New Book'){
        document.querySelector('.shwForm').innerHTML = 'Hide Menu';
    }else if (document.querySelector('.shwForm').innerHTML === 'Hide Menu') {
        document.querySelector('.shwForm').innerHTML = 'New Book';
    }
    //allows to toggle the entire form area on or off
}

function displayOnClick(){
    const sidebar = document.querySelector('.sidebar');
    const display = document.querySelector('.display');
        
    if (display.hasChildNodes()){
        while (display.firstChild){
            display.removeChild(display.firstChild)
        }
        displayObj()
    }else {
        displayObj()

    };
    //calls the displayObj function on button click

}