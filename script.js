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
    const container = document.querySelector('.container');
    
    if (container.querySelector('.contChild') == null){
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar', 'contChild');
        document.querySelector('.container').appendChild(sidebar);

        const h2 = document.createElement('h2');
        h2.innerHTML = 'Add new book';
        sidebar.appendChild(h2);

        const form = document.createElement('form');
        form.setAttribute('id', 'bookInfo');
        sidebar.appendChild(form);

        for (let i = 0; i <= 2; i++) {
            const div = document.createElement('div');
            form.appendChild(div);
        }

        const label0 = document.createElement('label');
        label0.setAttribute('for', 'Title');
        label0.innerHTML = 'Book Title';
        form.childNodes[0].appendChild(label0);

        const label1 = document.createElement('label');
        label1.setAttribute('for','Author');
        label1.innerHTML = 'Author';
        form.childNodes[1].appendChild(label1);

        const label2 = document.createElement('label');
        label2.setAttribute('for','Year');
        label2.innerHTML = 'Year of Publishing';
        form.childNodes[2].appendChild(label2);

        const textInp0 = document.createElement('input');
        textInp0.setAttribute('type', 'text');
        textInp0.setAttribute('name','Title');
        textInp0.setAttribute('id','Title');
        textInp0.setAttribute('placeholder','The Cat in The Hat...');
        form.childNodes[0].appendChild(textInp0);

        const textInp1 = document.createElement('input');
        textInp1.setAttribute('type', 'text');
        textInp1.setAttribute('name','Author');
        textInp1.setAttribute('id','Author');
        textInp1.setAttribute('placeholder','Dr. Seuss');
        form.childNodes[1].appendChild(textInp1);

        const textInp2 = document.createElement('input');
        textInp2.setAttribute('type', 'number');
        textInp2.setAttribute('name','Year');
        textInp2.setAttribute('id','Year');
        textInp2.setAttribute('placeholder','1957');
        form.childNodes[2].appendChild(textInp2);

        const btn = document.createElement('button');
        btn.classList.add('mainBtn','shwForm','subBtn');
        btn.setAttribute('onclick', 'addBookToLibrary()',);
        btn.innerHTML= 'Add to Library';
        sidebar.appendChild(btn);

        document.querySelector('.shwForm').innerHTML = 'Hide Menu';

    } else if (container.querySelector('.contChild') != null){
        container.removeChild(container.querySelector('.sidebar'));
        document.querySelector('.shwForm').innerHTML = 'New Book';
    }

    //allows to toggle the entire form area by deleting it or creating it in the dom
    //could have done this with about 3 lines of code (and I had) but genuinely thought this would behave differently. Now I'm not removing it either.
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