import Base from '../../Base';

class Slider extends Base {
  constructor({el, photos}) {
    super({el, photos});

    this.render();
  }

  render() {
    const listHTML = this.photos.map(this._createImage).join('');

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

  _createImage = ({preview, resource, zoom}) => {
    return `
      <div class="showcase__slide showcase__slide_image">
        <img
          class="showcase__slide-image"
          data-resource="${resource}"
          data-zoom="${zoom}"
          src="${preview}" />
      </div>
    `;
  }
}

export default Slider;
