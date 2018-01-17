import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentComponent from './ParentComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ParentComponent />, document.getElementById('root'));
registerServiceWorker();
