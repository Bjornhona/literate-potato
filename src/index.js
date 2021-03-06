import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "components/App";
import reportWebVitals from "reportWebVitals";
import Root from "Root";

ReactDOM.render(
    <React.StrictMode>
      <Root>
        <App />
      </Root>
    </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
