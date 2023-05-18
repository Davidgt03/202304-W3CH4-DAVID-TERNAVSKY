import { Component } from './component';

export class Header extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
     <header class="main-header">
      <h1 class="main-title">${this.title}</h1>
    </header>
    `;
  }
}
