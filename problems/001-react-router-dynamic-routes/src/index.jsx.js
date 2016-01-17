import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/router.jsx';

const mountDOMNode = document.querySelector('#js-react-app');

// webpack
require('./index.css');
require('file?name=[name].[ext]!./index.html');

ReactDOM.render(
    <Router />,
    mountDOMNode
);
