export default class Contact {
    constructor() {
      this._content = `
          <section>
              <h1 class="title">contact Information</h1>
              <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dignissimos! Deleniti iste quas error numquam eaque illum illo officiis cumque et impedit saepe, cupiditate est incidunt similique consequuntur velit quae.</p>
                  <ul class="contact-list">
                      <li>email</li>
                      <li>Facbook</li>
                      <li>LinkedIn</li>
                  </ul>
              </section>
              `;
    }
  
    get content() {
      return this._content;
    }
  }
  