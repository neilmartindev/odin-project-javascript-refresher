// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
// Put a function into the constructor that can report the book info like so:

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
    this.bookTitle = bookTitle
    this.bookAuthor = bookAuthor
    this.bookPages = bookPages
    this.bookRead = bookRead
    this.info = function() {
        console.log(bookTitle, bookAuthor,bookPages, bookRead)
    }
}

const theHobbit = new Book("The Hobbit, ", "J. R. R. Tolkien, ", "304 pages, ", "Not read yet")

console.log(theHobbit.info())