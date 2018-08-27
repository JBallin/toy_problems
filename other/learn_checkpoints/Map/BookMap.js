class BookMap {
  constructor(iterator) {
    this.library = new Map(iterator);
  }

  add(author, book) {
    if (this.library.has(author)) {
      const books = this.library.get(author);
      books.push(book);
      this.library.set(author, books);
    } else {
      this.library.set(author, [book]);
    }
    return this;
  }

  retrieve(author) {
    return this.library.get(author);
  }

  size() {
    return this.library.size;
  }
}

module.exports = { BookMap };
