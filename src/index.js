import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductReducer from "./redux/reducers/ProductReducer";
import { Provider } from "react-redux";

const store = createStore(ProductReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
