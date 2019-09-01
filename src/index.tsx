import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import configureStore from "./providers";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
