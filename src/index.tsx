// import React from 'react';
import ReactDOM from "react-dom/client";
import "./ui/index.scss";
import PilotComp from "./PilotComp";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("wrapper") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <PilotComp />
  // </React.StrictMode>
);

// console.log = function () {};
