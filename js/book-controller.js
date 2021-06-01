'use strict'

function onInit() {
    renderBooks()
    
}

function renderBooks() {
    var strHtml = ` <table class="books-table" border="2">
    <thead class="header">
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th colspan="3">Action</th>
             </tr>
    </thead>
    <tbody class="books">`

    gBooks.map(function(book) {
        strHtml += `<tr>
        <td> ${book.id}</td>
        <td> ${book.title}</td> 
        <td> ${book.price}</td>
        <td><button class="Read" type="button" onclick="onReadBook('${book.id}')">Read</button></td>
        <td><button class="Update" type="button" onclick="onUpdateBook('${book.id}')">Update</button></td>
        <td><button class="Delete" type="button" onclick="onDeleteBook('${book.id}')">Delete</button></tr></td>`
    });
    strHtml += ` </tbody>
    </table>`;
    var elContainer = document.querySelector('.container');
    elContainer.innerHTML = strHtml;

}   

function renderModal(bookId) {
    var strHTML =  
    `<h4 class="title"></h4>
    <h6></h6>
    <img class="card-img" src="img/.png" alt="Card image cap"></img>
    <label for="tentacles">Rate book: (1-10):</label>
    <input type="number" id="tentacles" name="tentacles"
           min="1" max="10">          
    <p></p>
    <button onclick="onCloseModal()">Close</button>`
    
    document.querySelector('.modal').innerHTML = strHTML;
}


function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
}

function onAddBook() {
      var newTitle = prompt('title?')
      var addPrice = prompt('and price?')
      addBook(newTitle, addPrice)
      renderBooks()
}

function onUpdateBook(bookId) {
    var newPrice = +prompt('Price?')
    updateBook(bookId, newPrice)
    renderBooks()
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    renderModal()
    var elModal = document.querySelector('.modal');
    console.log('elModal', elModal.querySelector('h4'));
    elModal.hidden = false
    elModal.querySelector('h4').innerText = book.title
    elModal.querySelector('h6').innerText = book.details
    // elModal.querySelector('p').innerText = book.imgUrl


}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}
