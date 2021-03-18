import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './scss/style.scss';
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux';
import {rootReducer} from './redux/reducers/rootReducer.js'
import thunk from 'redux-thunk';
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'


const history = createBrowserHistory()

const store = createStore(
  rootReducer,
  {
    
  },
  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
)

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
