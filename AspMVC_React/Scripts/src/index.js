import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import { Provider } from "react-redux";
import configurationStore from "./Store/configurationStore";

const store = configurationStore();

const wrapper = document.getElementById("root");
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      wrapper
    )
  : false;

//   to async redux with react components
//   1-use react redux
//   2- add Provider
//   3- add store to provider
//   4- use useSelector, useDispatch in react component from "react-redux"
