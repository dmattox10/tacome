import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { watcherSaga } from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from './reducers'
// import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from 'react-router-dom'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { tacoReducer } from './reducers';
const sagaMiddleware = createSagaMiddleware();

// const store = configureStore();
let store = createStore(
  tacoReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// registerServiceWorker();

