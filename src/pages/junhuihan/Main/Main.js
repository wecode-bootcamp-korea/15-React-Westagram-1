import React, { Component } from "react";

import MainStory from "../components/MainStory/MainStory";
import Nav from "../components/Nav/Nav";
import MainAside from "../components/MainAside/MainAside";
import "./Main.scss";

class Main extends Component {
  state = {
    userComments: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/userComment.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ userComments: res.userComments });
      });
  }

  handleAdd = (comment) => {
    const userComments = [
      ...this.state.userComments,
      { id: Date.now(), comment: comment },
    ];
    this.setState({ userComments: userComments });
 
  };

  handleDelete = (comment) => {
    const userComments = this.state.userComments.filter(
      (deletedComment) => deletedComment.id !== comment.id
    );
    this.setState({ userComments });
  };

  render() {
    const { userComments, commentValue } = this.state;
    return (
      <div className="Main">
        <Nav />
        <main className="mainValue">
          <MainStory
            userComments={userComments}
            commentValue={commentValue}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <MainAside />
        </main>
      </div>
    );
  }
}

export default Main;
