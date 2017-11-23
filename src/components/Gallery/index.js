import Base from '../Base';
import Slider from './Slider';
import Photo from './Photo';
import photos from '../../data/photos.json';

class Gallery extends Base {
  constructor({el}) {
    super({el});

    this._initComponents();

    this._initEvents();
  }

  render() {
    this.el.innerHTML = `
      <div class="showcase">
        <div class="showcase__wrapper"></div>
      </div>
    `;

    this.wrapperEl = this.el.querySelector('.showcase__wrapper');
  }

  _initComponents() {
    const [{resource, title}] = photos;

    this.photo = new Photo({
      el: document.createElement('div'),
      resource,
      title,
    });

    this.slider = new Slider({
      el: document.createElement('div'),
      items: photos,
    });

    this.wrapperEl.append(
      this.photo.el,
      this.slider.el,
    );
  }

  _selectPhoto = (event) => {
    const {target} = event;
    const {resource} = target.dataset;

    if (!resource) {
      return;
    }

    this.photo.update(resource);
  }

  _initEvents() {
    this.slider.on('click', this._selectPhoto);
  }
}

export default Gallery;
