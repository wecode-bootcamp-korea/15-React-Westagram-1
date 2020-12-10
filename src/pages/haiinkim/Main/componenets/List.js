import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  coloringHeart = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { comm, id, deleteComment } = this.props;
    const { isLiked } = this.state;

    return (
      <li className="mainFeedComment">
        <div className="mainFeedCommentList">
          <span>{comm.userName}</span>
          <span>{comm.content}</span>
        </div>
        <div className="mainFeedCommentLike">
          <span onClick={() => this.coloringHeart(id)}>
            {isLiked ? (
              <AiFillHeart className="navIcon red" />
            ) : (
              <AiOutlineHeart className="navIcon" />
            )}
          </span>
          <VscTrash className="navIcon" onClick={() => deleteComment(id)} />
        </div>
      </li>
    );
  }
}

export default List;
