import { DateTime } from './components/luxon.js';
import Form from './components/Form.js';
import List from './components/List.js';
import Contact from './components/Contact.js';

// get DOM of navigation links
const navLinks = document.querySelectorAll('.nav-link');

// get DOM of page container
const container = document.getElementById('app');

const defaultData = () => {
  const listData = new List();
  container.innerHTML = listData.content;
  List.displayBooks();
  listData.deleteBook();
};
// load default page
defaultData();

// add event listener to page navigation links
navLinks.forEach((element) => {
  const target = element.getAttribute('data-page');
  element.addEventListener('click', () => {
    switch (target) {
      case 'list':
        defaultData();
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

const updateTimeDisplay = () => {
  const timeDisplay = document.getElementById('timeDisplay');
  const currentDate = DateTime.now(); // eslint-disable-line no-undef
  // Formatting the date as a string
  const formattedDate = currentDate.toLocaleString(DateTime.DATETIME_FULL);
  timeDisplay.textContent = formattedDate;
};
// updateTimeDisplay();
updateTimeDisplay();
setInterval(updateTimeDisplay, 1000);
