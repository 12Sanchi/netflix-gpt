import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*  
<div classname="py-6 my-6">
       <input type="text" placeholder="Email Addess" />
        </div>
        <div classname="py-4 my-6">
          <input type="password" placeholder="Password" />
        </div>
*/
reportWebVitals();
