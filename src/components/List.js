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
}
