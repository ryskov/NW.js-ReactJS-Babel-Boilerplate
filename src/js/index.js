import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import Utils from './utils';

// load App CSS
Utils.loadCSS('appStyle', 'js/App/Style/base.css');
Utils.loadCSS('appFont', 'js/App/Style/icomoon.css');

// render App
ReactDOM.render(<App />, document.getElementById('content'));