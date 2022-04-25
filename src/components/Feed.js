import React, { Component } from "react";
import post from "../server/server";

//Navbar import
import Navbar from "./Navbar";
//Styling
import "./Feed.css";
import ErrorLabel from "./ErrorLabel";
import MappingFeed from "./MappingFeed";

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        text: "",
      },
      error: "",
      postsInDB: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      const postApiCall = async () => {
        const res = await post.get("/post");
        this.setState({ postsInDB: res.data });
      };
      postApiCall();
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit(event) {
    if (this.state.values.post === "") {
      event.preventDefault();
      this.setState({ error: "You must enter text!" });
    } else {
      post.post("/post", this.state.values).then((res) => {
        console.log(res);
      });
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
                this.setState((prevState) => ({
                  values: {
                    ...prevState.values,
                    post: event.target.value,
                  },
                }));
              }}
            />
            <button className="postButton">Post</button>
          </form>

          <div
            className={this.state.error !== "" ? "errorLabel" : "displayNone"}
          >
            <ErrorLabel errorLabel={this.state.error} />
            <div>EDITDELETE</div>
          </div>
          <div className="userPost">
            <MappingFeed postsState={this.state.postsInDB} />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
