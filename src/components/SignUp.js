import React, { Component } from "react";

//Styling files
import "./SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUpForm">
        <form>
          <p className="formTitle">Sign Up</p>
          <div style={{ "padding-bottom": "3%" }}>
            <input className="emailInput" placeholder="Email"></input>
          </div>
          <div>
            <input className="firstNameInput" placeholder="First Name" />
            <input className="lastNameInput" placeholder="Last Name" />
          </div>
        </form>
      </div>
    );
  }
}
