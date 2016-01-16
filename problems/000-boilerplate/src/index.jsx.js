const React = require('react');
const ReactDOM = require('react-dom');

const mountDOMNode = document.querySelector('#js-react-app');

// webpack
require('./index.css');
require('file?name=[name].[ext]!./index.html');

ReactDOM.render(
    <div>
        Component
    </div>,
    mountDOMNode
);
