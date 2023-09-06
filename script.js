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
        myLibrary.push(newBook);
        bookInfo.reset();
    }
        displayOnClick()
        
        //creates the book object by taking user input, pushes it into array and calls function to display books onscreen
}

function displayObj(){
    myLibrary.forEach(element => {
        const display = document.querySelector('.display');
        const newDiv = document.createElement('div');
        display.appendChild(newDiv);
        
        const list = document.createElement('ul');
        newDiv.appendChild(list);

        for (let i = 0; i <= 2; i++) {
            const listElement = document.createElement('li');
            const span = document.createElement('span');
            list.appendChild(listElement);
            listElement.appendChild(span);}

        list.childNodes[0].childNodes[0].innerHTML = 'Title:';
        list.childNodes[1].childNodes[0].innerHTML = 'Author:';
        list.childNodes[2].childNodes[0].innerHTML = 'Year:';

        let title = document.createElement('p');
        title.innerHTML = element.title;
        let author = document.createElement('p');
        author.innerHTML = element.author;
        let year = document.createElement('p');
        year.innerHTML = element.year;

        list.childNodes[0].appendChild(title);
        list.childNodes[1].appendChild(author);
        list.childNodes[2].appendChild(year);
        
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        newDiv.appendChild(btnDiv);
        
        const checkSpan = document.createElement('span');
        checkSpan.classList.add('fa-solid', 'fa-circle-check');
        checkSpan.style.fontWeight = 400;
        btnDiv.appendChild(checkSpan);
        
        const trashSpan = document.createElement('span');
        trashSpan.classList.add('fa-solid', 'fa-trash-can');
        trashSpan.style.fontWeight = 400;
        btnDiv.appendChild(trashSpan);
    })
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