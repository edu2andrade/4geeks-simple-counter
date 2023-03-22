//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

let seconds = 0;
let minutes = 0;
let hours = 0;

const counter = () => {

  seconds++;

  if(seconds > 59) {
    minutes++;
    seconds = 0;
  }

  if(minutes > 59) {
    hours++
    minutes = 0;
  }

  ReactDOM.render(
    <Home 
      seconds={seconds}
      minutes={minutes}
      hours={hours}
    />,
    document.querySelector("#app"))
};
  
setInterval(() => {
  counter()
}, 1000)
