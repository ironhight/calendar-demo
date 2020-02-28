import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

import "antd/dist/antd.css";

const initialState = {};
const middlwwares = [thunk];

declare global {
 interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(
 rootReducer,
 initialState,
 compose(
  applyMiddleware(...middlwwares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
);


ReactDOM.render(<Provider store={store}>
 <App />
</Provider>,
 document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
