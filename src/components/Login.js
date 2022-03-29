import React, { Component } from "react";

//Styling files
import "./Login.css";

export class Login extends Component {
  render() {
    return (
      <div className="loginFormBackground">
        <div className="loginForm">
          {" "}
          <form>
            <div style={{ "text-align": "center" }}>
              <div className="Logo" />
            </div>
            <p className="loginTitle">Login</p>
            <div>
              <input
                className="loginEmail"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <input
                className="loginPassword"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <button
                style={{ "margin-right": "2%" }}
                className="loginButton smallerScreenLogin"
              >
                Login
              </button>

              <button style={{}} className="loginButton smallerScreenLogin">
                Sign Up
              </button>
              <p className="textUnderButton">
                Don't have an account? Sign up now.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
