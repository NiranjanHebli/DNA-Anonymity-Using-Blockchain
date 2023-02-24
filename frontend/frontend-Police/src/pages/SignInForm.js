import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
          <Router>

        
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label my-10" htmlFor="CID ">CID</label>
                <input type="CID " id="CID " className="FormField__Input" placeholder="Enter your CID " name="CID " value={this.state.CID} onChange={this.handleChange} />
              </div>
               <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={show}>Get Public Key</button> 
               </div>

{/* 
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              // <div className="FormField">
              //     <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              // </div> */}
            </form>
          </div>
          </Router>
        );
    }
}

export default SignInForm;
