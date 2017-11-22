import template from './index.html';

class App {
  constructor(el) {
    this.el = el;
    
    this.render();
  }

  render() {
    this.el.innerHTML = template;
  }
}

export default App;
