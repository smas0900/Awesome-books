export default class List {
  constructor() {
    this._content = `
        <section class="main-container">
            <h1 class="h1 invisible">Awesome Books</h1>
            <div class="books"></div>
            <table>
                <thead>
                  <tr>
                    <th>Book Title</th>
                    <th>Author Name</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody class="library">
                </tbody>
            </table>
        </section>
        `;
  }

  get content() {
    return this._content;
  }

  static displayBooks() {
    let library = document.querySelector('.library');
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
      library.innerHTML = '';
      books.forEach((element, index) => {
        library.innerHTML += `
        <tr>
            <td>${element._title}</td>
            <td>${element._author}</td>
            <td>
                <button class="delete-btn" id=${index}>Remove</button>
            </td>
        </tr>
        `;
      });
    } else {
      library.innerHTML += `
        <tr>
            <td colspan="3"></td>
        </tr>
        `;
    }
  }
  deleteBook() {
    const delBtn = document.querySelectorAll('.delete-btn');
    delBtn.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.parentNode.parentNode.remove();
        const books = JSON.parse(localStorage.getItem('books'));
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        List.displayBooks();
        this.deleteBook();
      });
    });
  }
}
