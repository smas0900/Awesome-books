import Book from '../modules/Books.js';
export default class Form {
  constructor() {
    this._content = `
        <section class="main-container">
                <h2 class="New-header">Add New Book</h2>
                <div class="newbooks">
                    <form action="#" class="form">
                        <input class="title" type="text" placeholder="Add Book Title" id="title" name="title" required><br><br>
                        <input class="author" type="text" placeholder=" Add Author" id="author" name="author" required><br><br>
                        <button type="submit" name="btn" id="btn">Add</button>
                        <small class="checker"></small><br>
                    </form>
                </div>
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