import Base from '../Base';
import Slider from './Slider';
import Photo from './Photo';
import photos from '../../data/photos';

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
      title
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

  _initEvents() {
    this.slider.on('click', (event) => {
      const {target} = event;
      const {resource, title} = target.dataset;

      this.photo.update(resource);

      console.log('CLICK IMAGE = ', resource, title);
    })
  }
}

export default Gallery;
