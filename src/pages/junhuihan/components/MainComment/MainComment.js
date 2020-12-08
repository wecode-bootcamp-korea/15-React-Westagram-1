import React, { Component } from "react";
import "./MainComment.scss";
class MainComment extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.comment);
    console.log(this.props.key);
  };

  render() {
    const { comment, key } = this.props;

    return (
      <li className="MainComment">
        <span>{key}</span>
        <span>다람이</span>&nbsp;{comment.comment}
        <span id="deleteComment" onClick={this.handleDelete}>
          x
        </span>
      </li>
    );
  }
}

export default MainComment;
