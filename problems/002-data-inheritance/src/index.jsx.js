import React from 'react';
import ReactDOM from 'react-dom';

const mountDOMNode = document.querySelector('#js-react-app');

// webpack
require('./index.css');
require('file?name=[name].[ext]!./index.html');

import Main from './components/main.jsx';

ReactDOM.render(
    <Main />,
    mountDOMNode
);
