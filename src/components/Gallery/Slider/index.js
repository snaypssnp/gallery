import Base from '../../Base';

class Slider extends Base {
  activeClass = 'showcase__slide_active'

  constructor({el, photos}) {
    super({el, photos});

    this.render();

    this._initEvents();
  }

  render() {
    const listHTML = this.photos.map(this._createImage).join('');

    this.el.innerHTML = `
      <div class="showcase__slider ">
        <div class="showcase__slider-wrapper">
          <div class="showcase__slider-viewport">
            ${listHTML}
          </div>
        </div>
      </div>
    `;

    this.listImageEls = this.el.querySelectorAll('img');

    this._addActiveClass(this.listImageEls[0]);
  }

  isImage = (el) => {
    return el.classList.contains('showcase__slide-image');
  }

  _initEvents() {
    this.on('click', this._onClick);
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

  _onClick = (event) => {
    [...this.listImageEls]
      .forEach(this._removeActiveClass);

    this._addActiveClass(event.target);
  }

  _addActiveClass = (el) => {
    if (!this.isImage(el)) {
      return;
    }

    el.classList.add(this.activeClass);
  }

  _removeActiveClass = (el) => {
    if (!this.isImage(el)) {
      return;
    }

    el.classList.remove(this.activeClass);
  }
}

export default Slider;
