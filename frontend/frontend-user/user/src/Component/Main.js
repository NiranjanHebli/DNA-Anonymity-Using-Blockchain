import React from "react";
// import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import imgbg from "../Assets/genedx-bioinformatics-web.jpg";

export default function Main() {
  return (<>
      <div className="App__Aside">
        <img src={imgbg} alt="" className="imgcontainer" />
      </div>
      <div className="App__Form">
        <div className="centre">
          <h1>Clinic Portal</h1>
        </div>
        <div className="container">
          <Link to="/transaction">
            <button className="FormField__Button">Enter New Patient Details</button>
          </Link>
        </div>
        <div className="container margin-bottom:50px ">
          <button className="FormField__Button ">Update Transaction</button>
        </div>
        <div className="container margin-bottom:50px">
          <button className="FormField__Button ">Display Blockchain</button>
        </div>
      </div>
      </>
  );
}
