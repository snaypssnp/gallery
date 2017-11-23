import Base from '../../Base';

class Photo extends Base {
  constructor({el, resource, zoom}) {
    super({el, resource, zoom});

    this.render();

    this._initEvents();
  }

  render() {
    const {resource, zoom} = this;

    this.el.innerHTML = `<div class="showcase__viewport">
      <div class="showcase__item">
        <img class="showcase__item-image" src="${resource}">
        <div class="showcase__panner">
          <img src="${zoom}">
        </div>
      </div>
    </div>`;

    this.pannerEl = this.el.querySelector('.showcase__panner');
    this.zoomEl = this.pannerEl.querySelector('img');
  }

  update({resource, zoom}) {
    Object.assign(this, {resource, zoom});

    this.render();
  }

  _initEvents() {
    this.on('mouseenter', this._showZoom);
    this.on('mouseleave', this._hideZoom);
    this.on('mousemove', this._moveZoom);
  }

  _showZoom = () => {
    this.pannerEl.style.opacity = 1;
  }

  _hideZoom = () => {
    this.pannerEl.style.opacity = 0;
  }

  _moveZoom = (event) => {
    const {x, y, width} = this.el.getBoundingClientRect();
    const minLeft = width - this.zoomEl.offsetWidth;
    const top = y - event.pageY;
    const left = Math.max(x - event.pageX, minLeft);

    Object.assign(this.zoomEl.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }
}

export default Photo;
