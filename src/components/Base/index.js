class Base {
  constructor(props) {
    Object.assign(this, props);

    if (!(this.el instanceof Element)) {
      throw new Error('Argument "el" must belong to the class "Element"');
    }
  }

  on(eventType, fn) {
    this.el.addEventListener(eventType, fn);
  }

  off(eventType, fn) {
    this.el.removeEventListener(eventType, fn);
  }
}

export default Base;
