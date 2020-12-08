import React from "react";
import "./Main.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      heartColor: true,
    };
  }

  coloringHeart = () => {
    const { heartColor } = this.state;
    this.setState({
      heartColor: !heartColor,
    });
  };

  render() {
    console.log(this.props);

    const { comm, deleteComment } = this.props;
    const { heartColor } = this.state;

    return (
      <li className="mainFeedComment">
        <div className="mainFeedCommentList">
          <span>{comm.userName}</span>
          <span>{comm.content}</span>
        </div>
        <div className="mainFeedCommentLike">
          <span onClick={() => this.coloringHeart(this.props.i)}>
            {heartColor ? (
              <AiOutlineHeart className="navIcon" />
            ) : (
              <AiFillHeart className="navIcon red" />
            )}
          </span>
          <VscTrash
            className="navIcon"
            onClick={() => deleteComment(this.props.i)}
          />
        </div>
      </li>
    );
  }
}

export default List;
