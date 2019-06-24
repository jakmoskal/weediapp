import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'

const enhance = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) : {};

ReactDOM.render(<Provider store={createStore(rootReducer, {}, enhance)}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
