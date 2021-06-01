'use strict'
const KEY = 'books';
var gBooks;
var gTitles = ['War and peace', 'Orlando', 'Sapiens', 'The life before us'];
_createBooks()


function _createBook(title, price) {
    var book = {
        id: makeId(),
        title: title,
        price: 50,
        details:  makeLorem (),
        raiting: 0,

        // imgUrl: imgUrl,
    }
   return book
}


function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = gTitles.map (function(title) {
            return _createBook(title)
            
        });
    }
    gBooks = books
    _saveBooksToStorage();
    console.log(books);
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}


function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();

}


function updateBook(bookId, price) {
    var bookIdx = gBooks.findIndex(function(book){
        return book.id === bookId;
    })
    gBooks[bookIdx].price = price;
    _saveBooksToStorage();
}



function addBook(title, price) {
    var book = _createBook(title, price)
    gBooks.unshift(book)
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}
