import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root'));
registerServiceWorker();