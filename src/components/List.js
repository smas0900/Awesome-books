export default class List {
  constructor() {
    this._content = `
        <section>
            <h1 class="h1 invisible">Awesome Books</h1>
            <div class="books"></div>
            <table>
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>remove</th>
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

  displayBooks() {
    let library = document.querySelector('.library');
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
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
}
