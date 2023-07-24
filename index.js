let myLibrary = [
    {
        id: 1,
        title: 'mybook1',
        releaseDate: '1992',
        description: 'This is the greatest book in the world',
        read: true,
    },
    {
        id: 2,
        title: 'mybook2',
        releaseDate: '1992',
        description: 'This is the greatest book in the world',
        read: false,
    },
    {
        id: 3,
        title: 'mybook3',
        releaseDate: '1992',
        description: 'This is the greatest book in the world',
        read: true,
    },
];

// localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

console.log(myLibrary.length);

const createBook = (id, title, releaseDate, description, read) => {
    return {
        id: id,
        title: title,
        releaseDate: releaseDate,
        description: description,
        read: read,
    };
};

const addBookToLibrary = (book) => {
    const newId = parseInt(myLibrary.length + 1);
    let hasRead;

    if (book.elements.bookRead.value === 'on') {
        hasRead = true;
    } else {
        hasRead = false;
    }

    const thisBook = createBook(
        newId,
        book.elements.bookTitle.value,
        book.elements.bookReleaseDate.value,
        book.elements.bookDescription.value,
        hasRead
    );

    myLibrary.push(thisBook);
    document.getElementById('books').innerHTML = '';
    displayBooks();
    closeMenu();
};

const removeBookFromLibrary = (e) => {
    id = parseInt(e.target.id);
    document.getElementById('books').innerHTML = '';
    myLibrary = myLibrary.filter((elem) => elem.id !== id);
    displayBooks();
};

const displayBooks = () => {
    myLibrary.map((elem) => {
        createBookCard(elem);
    });
};

window.onload = () => {
    displayBooks();
    document
        .getElementById('addBookForm')
        .addEventListener('submit', function (e) {
            e.preventDefault();
            addBookToLibrary(this);
        });
};

const createBookCard = (book) => {
    const newH3 = document.createElement('h3');
    newH3.textContent = `${book.title}`;
    newH3.style.padding = '4%';

    const newParagraph = document.createElement('p');
    newParagraph.textContent = `${book.description}`;
    newParagraph.style.padding = '4%';

    const newButton = document.createElement('button');
    newButton.style.border = 'none';
    newButton.textContent = 'X';
    newButton.style.backgroundColor = 'white';
    newButton.className += 'bookButton';
    newButton.addEventListener('click', removeBookFromLibrary);
    newButton.id = `${book.id}`;
    newButton.style.backgroundColor = '#f1f5f9';

    const secondDiv = document.createElement('div');

    const newLabel = document.createElement('label');
    newLabel.for = 'readCheckbox';
    newLabel.textContent = 'Read';

    const newInput = document.createElement('input');
    newInput.id = 'readCheckbox';
    newInput.type = 'checkbox';
    newInput.label = 'Read';
    if (book.read === true) {
        newInput.checked = 'true';
    }
    secondDiv.appendChild(newLabel);
    secondDiv.appendChild(newInput);

    const newDiv = document.createElement('div');

    newDiv.appendChild(newH3);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newButton);
    newDiv.appendChild(secondDiv);

    newDiv.id = `${book.id}`;
    newDiv.style.display = 'flex';
    newDiv.style.flexDirection = 'column';
    newDiv.style.outline = 'auto';
    newDiv.style.margin = '4%';
    newDiv.style.width = '400px';
    newDiv.style.height = '150px';

    document.getElementById('books').appendChild(newDiv);
};

const closeMenu = (e) => {
    document.getElementById('addBookForm').style.display = 'none';
};

const openMenu = () => {
    document.getElementById('addBookForm').style.display = 'Flex';
};
