import React, { Component } from "react";

//Navbar import
import Navbar from "./Navbar";
//Styling
import "./Feed.css";
import ErrorLabel from "./ErrorLabel";

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      post: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.post === "") {
      this.setState({ error: "You must enter text!" });
    } else {
      event.preventDefault();
      console.log("Post created");
      this.setState({ error: "" });
    }
  }
  render() {
    return (
      <div>
        <Navbar />

        <div style={{ textAlign: "center", margin: "auto" }}>
          <form onSubmit={this.handleSubmit}>
            {" "}
            <input
              className="questionPrompt"
              placeholder="What did your cat do today?..."
              type="text"
              onChange={(event) => {
                this.setState({ post: event.target.value });
              }}
            />
            <button className="postButton">Post</button>
          </form>

          <div
            className={this.state.error !== "" ? "errorLabel" : "displayNone"}
          >
            <ErrorLabel errorLabel={this.state.error} />
          </div>
          <div className="userPost">
            <h4>User's Name</h4>
            <p>Users post</p>
            <h5>1/04/2022</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
