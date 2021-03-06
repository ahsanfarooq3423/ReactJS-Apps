import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

//REDUCERS
import sentimentReducer from './store/reducer/sentiment';
import speechReducer from './store/reducer/speech';
import audioReducer from './store/reducer/audio';
import problemReducer from './store/reducer/problem';
import analyticsReducer from './store/reducer/analytics';



import thunk from 'redux-thunk';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const rootReducer = combineReducers({
    speechState: speechReducer,
    sentimentState: sentimentReducer,
    audioState: audioReducer,
    problemState : problemReducer,
    analyticsState : analyticsReducer
})


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
