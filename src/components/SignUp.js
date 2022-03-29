import React, { Component } from "react";

//Styling files
import "./SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUpBackground">
        <div className="signUpForm">
          <form>
            <p className="formTitle">Sign Up</p>
            <div style={{ "text-align": "center" }}>
              <div className="mobileLogo" />
            </div>
            <div>
              <input className="emailInput" placeholder="Email"></input>
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="First Name"
              />
              <input
                className="lastNameInput smallerScreen"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="Password"
                type="password"
              />
              <input
                className="lastNameInput smallerScreen"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            <div style={{ "text-align": "center", margin: "auto" }}>
              <button className="signUpButton">Submit</button>
            </div>
          </form>
        </div>
        <div className="sloganText">
          <h1>Purrfect for cat lovers!</h1>
        </div>
      </div>
    );
  }
}
