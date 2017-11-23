import template from './index.html';
import Base from '../Base';
import Gallery from '../Gallery';

class App extends Base {
  constructor({el}) {
    super({el});

    this.render();

    this._initComponents();
  }

  render() {
    this.el.innerHTML = template;
  }

  _initComponents() {
    this.gallery = new Gallery({
      el: this.el.querySelector('.js-app'),
    });
  }
}

export default App;
