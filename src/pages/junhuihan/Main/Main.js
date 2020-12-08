import React, { Component } from "react";
import MainStory from "../components/MainStory/MainStory";
import Nav from "../components/Nav/Nav";
import MainAside from "../components/MainAside/MainAside";
import "./Main.scss";

class Main extends Component {
  state = {
    userComments: [
      { id: 1, comment: "멋진 착륙 좋아요" },
      { id: 2, comment: "멋진 착륙 좋아요" },
      { id: 3, comment: "멋진 착륙 좋아요" },
    ],
  };

  handleAdd = (comment) => {
    const userComments = [
      ...this.state.userComments,
      { id: Date.now(), comment: comment },
    ];
    this.setState({ userComments: userComments });
    console.log(userComments);
  };

  handleDelete = (comment) => {
    const userComments = this.state.userComments.filter(
      (deletedComment) => deletedComment.id !== comment.id
    );
    this.setState({ userComments });
  };

  render() {
    return (
      <>
        <Nav />
        <main className="main">
          <MainStory
            userComments={this.state.userComments}
            commentValue={this.state.commentValue}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <MainAside />
        </main>
      </>
    );
  }
}

export default Main;
