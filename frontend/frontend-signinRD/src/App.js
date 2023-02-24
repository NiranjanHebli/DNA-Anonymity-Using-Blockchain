import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import videoBg from "./assets/Dna - 40967.mp4"
// import Navbar from "./components/Navbar";
import "./App.css";
// import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        {/* <Navbar/> */}
        <div className="App">
          <div className="App__Aside">
  
            {/* <img
          src="./AjUDfdqkBwoc47wStwXbTk-1200-80.jpeg.webp"
          class="w-full"
          alt="Sample image"
        /> */}
        <video src={videoBg} autoPlay loop muted/>


          </div>
          <div className="App__Form">
            <h1>Research and Development Login</h1>
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
