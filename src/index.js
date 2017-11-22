import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import './resources/styles/flexboxgrid.css';
import store from './store';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));
registerServiceWorker();
