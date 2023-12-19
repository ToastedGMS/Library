// Initialize the library with some initial books (dummy data for testing).
const myLibrary = [];

// Book constructor class to create book objects.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = false;
    }
}

const subBtn = document.querySelector('.mainBtn');

// Function to add a book to the library.
function addBookToLibrary() {
    const bookInfo = document.querySelector('#bookInfo');
    event.preventDefault();

    const title = document.querySelector('#Title');
    const author = document.querySelector('#Author');
    const year = document.querySelector('#Year');

    // Check if any required field is empty and show an alert if so.
    if (title.value === '' || author.value === '' || year.value === '') {
        alert('Please fill all fields');
    } else {
        // Create a new Book object and add it to the library.
        const newBook = new Book(title.value, author.value, year.value);
        myLibrary.push(newBook);
        bookInfo.reset();
    }

    // Refresh the displayed books.
    displayOnClick();
}

// Function to display books on the screen.
function displayObj() {
    myLibrary.forEach((element, index) => {
        const libIndex = myLibrary.indexOf(element);
        const display = document.querySelector('.display');
        const newDiv = document.createElement('div');
        display.appendChild(newDiv);

        const list = document.createElement('ul');
        newDiv.appendChild(list);

        for (let i = 0; i <= 2; i++) {
            const listElement = document.createElement('li');
            const span = document.createElement('span');
            list.appendChild(listElement);
            listElement.appendChild(span);
        }

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

        // Create a button for marking the book as read/unread.
        const checkSpan = document.createElement('span');
        checkSpan.classList.add('fa-regular', 'fa-eye');
        checkSpan.style.fontWeight = 400;
        btnDiv.appendChild(checkSpan);

        // Set button text and toggle font weight based on read status.
        checkSpan.style.fontWeight = element.read ? 900 : 400;
        checkSpan.addEventListener('click', () => toggleReadStatus(index));

        // Create a button for deleting the book.
        const trashSpan = document.createElement('span');
        trashSpan.classList.add('fa-solid', 'fa-trash-can');
        trashSpan.style.fontWeight = 400;
        btnDiv.appendChild(trashSpan);

        // Add an event listener to delete the book when the button is clicked.
        trashSpan.addEventListener('click', function() {
            myLibrary.splice(libIndex, 1);
            displayOnClick();
        });
    });
    // This function pulls each object from the array and displays its properties on a div.
}

// Function to toggle the visibility of the form for adding books.
function showForm() {
    document.querySelector('.sidebar').classList.toggle('hidden');

    if (document.querySelector('.shwForm').innerHTML === 'New Book') {
        document.querySelector('.shwForm').innerHTML = 'Hide Menu';
    } else if (document.querySelector('.shwForm').innerHTML === 'Hide Menu') {
        document.querySelector('.shwForm').innerHTML = 'New Book';
    }
    // This function allows toggling the entire form area on or off.
}

// Function to display the library of books and handle initial display.
function displayOnClick() {
    const sidebar = document.querySelector('.sidebar');
    const display = document.querySelector('.display');

    if (display.hasChildNodes()) {
        // If there are displayed books, remove them.
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
        displayObj(); // Call displayObj to display the updated books.
    } else {
        displayObj(); // Call displayObj to display books when there are none displayed.
    }
}

// Function to toggle the read status of a book.
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read; // Toggle the read property.
    displayOnClick(); // Refresh the display.
}
