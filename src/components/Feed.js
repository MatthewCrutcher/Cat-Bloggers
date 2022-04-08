import React, { Component } from "react";

//Navbar import
import Navbar from "./Navbar";
//Styling
import "./Feed.css";

export class Feed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ "text-align": "center", margin: "auto" }}>
          <input
            className="questionPrompt"
            placeholder="What did your cat do today?..."
            type="text"
          />
          <button className="postButton">Post</button>
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
