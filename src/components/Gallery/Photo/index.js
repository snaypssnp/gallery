import Base from '../../Base';

class Photo extends Base {
  constructor({el, resource}) {
    super({el, resource}); //
  }
  render() {
    const {resource} = this;

    this.el.innerHTML = `<div class="showcase__viewport">
      <div class="showcase__item">
        <img class="showcase__item-image" src="${resource}">
      </div>
    </div>`;
  }

  update(resource) {
    this.resource = resource;

    this.render();
  }
}

export default Photo;
