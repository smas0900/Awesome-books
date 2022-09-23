class Books {
  constructor() {
    this.BookList = {};
    this.StoreBooks = [];
    this.DisplayBooks = document.querySelector('.collection');
    this.NewTitle = document.querySelector('#title');
    this.NewAuthor = document.querySelector('#author');
    this.SaveBooks = localStorage.getItem('BookList');
    this.AddBook = document.querySelector('#btn');
    this.ErrorChecker = document.querySelector('.checker');
    this.DisplayColor = document.querySelector('.Display');
  }

  SaveItem() {
    this.AddBook.addEventListener('click', () => {
      this.BookList = {
        book: this.NewTitle.value,
        author: this.NewAuthor.value,
      };
      this.StoreBooks.push(this.BookList);
      localStorage.setItem('Todo', JSON.stringify(this.StoreBooks));
      this.DisplayData();
    });
  }

  DisplayData() {
    this.DisplayBooks.innerHTML = '';
    const HoldData = JSON.parse(localStorage.getItem('Todo'));
    if (HoldData.length > 0) {
      this.StoreBooks = HoldData;
      HoldData.forEach((element, index) => {
        this.DisplayBooks.innerHTML += `
          <tr class="Display">
            <td><span>"</span>${element.book}<span>" by </span>${element.author}</td>
            <td><button class="remove" id="${index}">Remove</button></td>
          </tr>`;
        const removeBtn = document.querySelectorAll('.remove');
        removeBtn.forEach((elem) => {
          elem.addEventListener('click', (e) => {
            elem.parentNode.parentNode.remove();
            Books.removeData(e.target.id);

            this.DisplayData();
          });
        });
      });
    } else {
      this.DisplayBooks.innerHTML += `
      <tr class="Display">
      <td colspan="2">Nothing to show</td>
      </tr>`;
    }
  }

  static removeData(index) {
    const books = JSON.parse(localStorage.getItem('Todo'));
    books.splice(index, 1);
    localStorage.setItem('Todo', JSON.stringify(books));
  }
}

const Book = new Books();
Book.SaveItem();
Book.DisplayData();
localStorage.removeItem('bookarr');

