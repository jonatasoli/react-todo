import React from 'react';
import ReactDOM from 'react-dom';
import './css/layouts/side-menu.css';
import './css/layouts/side-menu-old-ie.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
