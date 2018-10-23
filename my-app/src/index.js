import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './admin';
import ERouter from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ERouter />, document.getElementById('root'));
registerServiceWorker();
