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
}