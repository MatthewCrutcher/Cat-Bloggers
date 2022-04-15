import React, { Component } from "react";
import users from "../server/server";
import ErrorLabel from "./ErrorLabel";

//Styling files
import "./Login.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailsInDB: [],
      email: "",
      password: "",
      error: "",
      emailMatches: "",
      userPasswordInDB: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    event.preventDefault();
    this.state.emailsInDB.map((val) => {
      if (this.state.email === val.email) {
        this.setState({ emailMatches: val.email });
        this.setState({ userPasswordInDB: val.password });
      }
    });
    if (
      this.state.emailMatches === "" ||
      this.state.password !== this.state.userPasswordInDB
    ) {
      event.preventDefault();
      this.setState({ error: "Email or password are incorrect!" });
    } else {
      window.location.href = "http://localhost:3000/feed";
    }
  }

  render() {
    return (
      <div className="loginFormBackground">
        <div className="loginForm">
          {" "}
          <form target="/feed" onSubmit={this.handleSubmit}>
            <div style={{ textAlign: "center" }}>
              <div className="Logo" />
            </div>
            <p className="loginTitle">Login</p>
            <div>
              <input
                className="loginEmail"
                type="email"
                placeholder="Email"
                required
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                className="loginPassword"
                type="password"
                placeholder="Password"
                required
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>
            <div>
              <button
                style={{ marginRight: "2%" }}
                className="loginButton smallerScreenLogin"
              >
                Login
              </button>

              <button className="loginButton smallerScreenLogin">
                Sign Up
              </button>
              <p className="textUnderButton">
                Don't have an account? Sign up now.
              </p>
            </div>
            <div
              className={this.state.error !== "" ? "errorLabel" : "displayNone"}
            >
              <ErrorLabel errorLabel={this.state.error} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
