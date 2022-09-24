import Form from './components/Form.js';
import List from './components/List.js';
import Contact from './components/Contact.js';

// get DOM of navigation links
const navLinks = document.querySelectorAll('.nav-link');

// get DOM of page container
const container = document.getElementById('app');

// load default page
defaultData();

// add event listener to page navigation links
navLinks.forEach((element) => {
  const target = element.getAttribute('data-page');
  element.addEventListener('click', () => {
    switch (target) {
      case 'list':
        {
          defaultData();
        }
        break;
      case 'form':
        {
          const formData = new Form();
          container.innerHTML = formData.content;
          formData.activeFormSubmit();
        }
        break;
      case 'contact':
        {
          const contentData = new Contact();
          container.innerHTML = contentData.content;
        }
        break;
      default: {
        defaultData();
      }
    }
  });
});

function defaultData() {
  const listData = new List();
  container.innerHTML = listData.content;
  listData.displayBooks();
  listData.deleteBook();
}
