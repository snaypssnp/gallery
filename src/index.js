import './styles/index.css';
import App from './components/App';

const app = new App({
  el: document.createElement('div'),
});

document.getElementById('root').append(app.el);
