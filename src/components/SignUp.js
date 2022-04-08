import React, { Component } from "react";
import users from "../server/server";

//Styling files
import "./SignUp.css";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    users.post("/users", this.state).then((res) => {
      console.log(res);
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="signUpBackground">
        <div className="signUpForm">
          <form onSubmit={this.handleSubmit}>
            <p className="formTitle">Sign Up</p>
            <div style={{ textAlign: "center" }}>
              <div className="mobileLogo" />
            </div>
            <div>
              <input
                className="emailInput"
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="First Name"
                type="text"
                value={this.state.firstName}
                onChange={(event) => {
                  this.setState({ firstName: event.target.value });
                }}
              />
              <input
                className="lastNameInput smallerScreen"
                placeholder="Last Name"
                type="text"
                value={this.state.lastName}
                onChange={(event) => {
                  this.setState({ lastName: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
              <input
                className="lastNameInput smallerScreen"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            <div style={{ textAlign: "center", margin: "auto" }}>
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
