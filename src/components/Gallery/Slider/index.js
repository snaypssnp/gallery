import Base from '../../Base';

class Slider extends Base {
  constructor({el, items}) {
    super({el, items});
  }
  render() {
    const listHTML = this.items.map(this._createImage).join('');

    this.el.innerHTML = `
      <div class="showcase__slider">
        <div class="showcase__slider-wrapper">
          <div class="showcase__slider-viewport">
            ${listHTML}
          </div>
        </div>
      </div>
    `;
  }

  _createImage({preview, resource}) {
    return `
      <div class="showcase__slide showcase__slide_image">
        <img
          class="showcase__slide-image"
          data-resource="${resource}" 
          src="${preview}" />
      </div>
    `;
  }
}

export default Slider;
