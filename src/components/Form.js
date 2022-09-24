import Book from '../modules/Books.js';
export default class Form {
  constructor() {
    this._content = `
        <section>
            <form class = "form">
            <input class="title" type="text" placeholder="book Title" required>
            <input class="author" type="text" placeholder="Book Author" required>
            <button type="submit" class="add"> Add </button>
            </form>
        </section>
        `;
  }

  get content() {
    return this._content;
  }
  activeFormSubmit() {
    const form = document.querySelector('.form');
    const author = document.querySelector('.author');
    const title = document.querySelector('.title');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorName = author.value;
      const bookTitle = title.value;
      const data = new Book(bookTitle, authorName);
      data.addBook();
      author.value = '';
      title.value = '';
    });
  }
}