// Class book
class Book {
    constructor (title, author, id){
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

// Class UI
class UI {
    addBookToList (book){
        //Get book list
        const list = document.querySelector('.book-list tbody');
        //Create markup)
        const tr = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td class="id">${book.id}</td>
            <td>
                <button class="waves-effect waves-light btn delete-btn red right">Delete <i class="material-icons right">close</i></button>
            </td>
        </tr>
        `;

        list.insertAdjacentHTML("beforeend", tr);
    }


    showAlert (message, type){

        // Create markup
        const alert = `
            <div class="card alert ${type === 'error'? 'red': 'green'}">
                <div class="card-content white-text">
                  <span class="card-title">${type === 'error'? 'Error': 'Success'}</span>
                  <p>${message}</p>
                </div>
            </div>
        `;

        // Get title
        const cardTitle = document.querySelector('.card-title');
        //Get button
        const btn = document.querySelector('form button');
        btn.disabled = true;

        //Insert alert
        cardTitle.insertAdjacentHTML('afterend', alert);

        let timeout = setTimeout(function () {
            document.querySelector('.alert').remove();
            btn.disabled = false;
        },2000)
    }
}

// Class Local Storage
class Store{
    getBooks(){
        let books;
        if(!localStorage.getItem('books')){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books;
    }
    addBook(book){
        //Get from LS
        const books = this.getBooks();
        //Add new book
        books.unshift(book);
        // Save to LS
        localStorage.setItem('books', JSON.stringify(books));
    }
    removeBook(booksId){
        //Get from LS
        const books = this.getBooks();
        //Search and remove book
        books.forEach(({id},index) => {
            if (id === booksId) books.splice(index,1);
        });
        // Save to LS
        localStorage.setItem('books', JSON.stringify(books));
    }

}


//Event DOMContentLoaded
document.addEventListener('DOMContentLoaded',function (e) {
    //Create Stores class element
    const store = new Store();
    //Create UI
    const ui = new UI();
    //Get books from storage
    const books = store.getBooks();
    //Add books from LS to markup
    books.forEach(book => ui.addBookToList(book));

});

// Event submit
document.forms['addBookForm'].addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    let title = this.elements['book_title'].value,
        author = this.elements['book_author'].value,
        id = this.elements['book_id'].value;

    //Create book
    const book = new Book(title, author, id);
    //Create UI
    const ui = new UI();
    //Get Store
    const store = new Store();

    //Validate
    if (title === '' || author === '' || id === ''){
        //Show error
        ui.showAlert('Please fill in all fields', 'error');
    }
    else if(store.getBooks().some( book => book.id === id )){
        //Show error
        ui.showAlert('this book id has been already used', 'error');
    }
    else {
        //Add book to UI
        ui.addBookToList(book);
        //Show success message
        ui.showAlert('Book added!', 'success');
        //Add book to localStorage
        store.addBook(book);
    }

    //Clear form
    this.reset();
    Materialize.updateTextFields();
});

// Event for deleteBooks
document.querySelector('.book-list').addEventListener('click',function deleteBooks (e) {
    if (e.target.classList.contains('delete-btn')){
        const tr = e.target.closest('tr');
        const id = tr.querySelector('.id');
        const store = new Store();
        const ui = new UI();

        if(confirm('Do you want delete this book?')){
            //Remove book from LS
            store.removeBook(id.textContent);
            //Remove book from markup
            tr.remove();
            //Show success message
            ui.showAlert('Book deleted!', 'success');
        }

    }
});