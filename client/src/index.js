import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComplimentBox from './ComplimentBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComplimentBox />, document.getElementById('root'));
registerServiceWorker();
