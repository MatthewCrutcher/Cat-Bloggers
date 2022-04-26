import React from "react";
import users from "../server/server";
import { v4 as uuidv4 } from "uuid";
//Styling files
import "./SignUp.css";
import ErrorLabel from "./ErrorLabel";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        id: uuidv4(),
      },
      error: "",
      emailsInDB: [],
      confirmPassword: "",
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

  handleSubmit(event) {
    this.state.emailsInDB.map((val) => {
      if (this.state.values.email === val.email) {
        event.preventDefault();
        console.log("Cannot create user");
        throw this.setState({ error: "Email Already Exists" });
      }
      return null;
    });
    if (this.state.values.password !== this.state.confirmPassword) {
      event.preventDefault();
      console.log("Do Not Equal");
      throw this.setState({ error: "Passwords do not match" });
    }

    users.post("/users", this.state.values).then((res) => {
      console.log(res);
      window.location.href = "http://localhost:3000/feed";
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
                required
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
                required
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
                required
                onChange={(event) => {
                  this.setState({ confirmPassword: event.target.value });
                }}
              />
            </div>
            <div style={{ textAlign: "center", margin: "auto" }}>
              <button className="signUpButton">Submit</button>
            </div>
            <div
              className={this.state.error !== "" ? "errorLabel" : "displayNone"}
            >
              <ErrorLabel errorLabel={this.state.error} />
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
