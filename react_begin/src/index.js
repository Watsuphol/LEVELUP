import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// การสร้าง Component
/* function HelloComponent() {
  return <h1>Hello</h1>;
} */

// การสร้าง Class Component
class HelloComponent2 extends React.Component {
  return() {
    <h1>Hello HelloComponent2</h1>;
  }
}

ReactDOM.render(<HelloComponent2 />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
