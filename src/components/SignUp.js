import React, { Component } from "react";
import users from "../server/server";
import EmailDuplication from "./EmailDuplication";

//Styling files
import "./SignUp.css";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
      emailAlreadyExists: "all good",
      emailsInDB: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Gets data and sets emailsInDB state
  componentDidMount() {
    const emailApiCall = async () => {
      try {
        const res = await users.get("/users");
        const response = res.data;
        this.setState({ emailsInDB: response });
      } catch (error) {
        console.log(error);
      }
    };
    emailApiCall();
  }
  handleEmailDuplication() {}

  handleSubmit(event) {
    this.state.emailsInDB.map((val) => {
      if (this.state.values.email === val.email) {
        event.preventDefault();
        console.log("Cannot create user");
        throw this.setState({ emailAlreadyExists: "Email Already Exists" });
      }
    });

    users.post("/users", this.state.values).then((res) => {
      console.log(res);
    });
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
                required
                value={this.state.values.email}
                onChange={(event) => {
                  this.setState((prevState) => ({
                    values: {
                      ...prevState.values,
                      email: event.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="First Name"
                type="text"
                value={this.state.values.firstName}
                onChange={(event) => {
                  this.setState((prevState) => ({
                    values: {
                      ...prevState.values,
                      firstName: event.target.value,
                    },
                  }));
                }}
              />
              <input
                className="lastNameInput smallerScreen"
                placeholder="Last Name"
                type="text"
                value={this.state.values.lastName}
                onChange={(event) => {
                  this.setState((prevState) => ({
                    values: {
                      ...prevState.values,
                      lastName: event.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div>
              <input
                className="firstNameInput smallerScreen"
                placeholder="Password"
                type="password"
                value={this.state.values.password}
                onChange={(event) => {
                  this.setState((prevState) => ({
                    values: {
                      ...prevState.values,
                      password: event.target.value,
                    },
                  }));
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
        <div>{this.state.emailAlreadyExists}</div>
        <div className="sloganText">
          <h1>Purrfect for cat lovers!</h1>
        </div>
      </div>
    );
  }
}

function checkDupliate(array, value) {
  return array.some((arrayValue) => value === arrayValue);
}
