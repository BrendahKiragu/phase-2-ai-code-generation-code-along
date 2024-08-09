// Your code here
/** A book object representation.
 * @typedef {Book} Book
 * @property{string} title - Title of the book
 * @property{string} author - Author of the book
 * @property{string} genre - the genre of the book
 */

/**
 * @param {string} genre - the genre of the book
 * @param {string} books - an array of books object
 * returns {Book []} An array of book objects matching the specified genre
 */
export function filterByGenre(genre, books) {

  return books.filter(book => book.genre === genre);
}

