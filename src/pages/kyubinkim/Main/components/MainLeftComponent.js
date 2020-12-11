import React, { Component } from "react";
import {
  faBookmark,
  faHeart,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MainLeftComponent extends Component {
  state = {
    userComment: "",
    userCommentList: [],
  };

  // componentDidMount() {
  //   fetch("http://localhost:3002/data/Data.json", {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         userCommentList: res.data,
  //       });
  //     });
  // }

  userComment = (e) => {
    this.setState({ userComment: e.target.value });
  };

  handleCreate = (e) => {
    e.preventDefault();
    const { userCommentList, userComment } = this.state;
    if (userComment !== "") {
      this.setState({
        userCommentList: [
          ...userCommentList,
          {
            id: userCommentList.length + 1,
            mention: userComment,
          },
        ],
      });
      this.setState({ userComment: "" });
    }
  };

  handleRemove = (e) => {
    const { userCommentList } = this.state;
    const nextComment = userCommentList.filter((info) => {
      return info.id !== e;
    });
    this.setState({ userCommentList: nextComment });
  };

  render() {
    const { userCommentList, userComment } = this.state;
    return (
      <div className="main-left">
        <div className="story">
          <div className="story-wrap">
            <div className="story-box">
              <img
                src="https://i.pinimg.com/564x/1b/d9/62/1bd9622642721f5ac5e5f75bc1e214b2.jpg"
                alt="인물1"
              />
              <span>UserName</span>
            </div>
            <div className="story-box">
              <img
                src="https://i.pinimg.com/236x/d4/2f/94/d42f940c0bab85ee728805175f242d59.jpg"
                alt="인물2"
              />
              <span>UserName</span>
            </div>
          </div>
        </div>
        <div className="feeds">
          <article>
            <div className="feeds-header">
              <img
                src="https://i.pinimg.com/564x/46/d6/f3/46d6f351007f494efdd48406b792e3fd.jpg"
                alt="인물3"
              />
              <h2>UserName</h2>
            </div>
            <div className="feeds-img">
              <img
                src="https://i.pinimg.com/564x/2b/dc/f8/2bdcf8d6a3040536324c58504cd25cff.jpg"
                alt="인물4"
              />
            </div>
            <div className="feeds-like">
              <FontAwesomeIcon className="faHeart" icon={faHeart} />
              <FontAwesomeIcon className="faComment" icon={faComment} />
              <FontAwesomeIcon className="faShare" icon={faShare} />
              <FontAwesomeIcon className="faBookmark" icon={faBookmark} />
            </div>
            <div className="feeds-howmanylike">좋아요 33,333개</div>
            <ul id="list" className="feeds-comment">
              {userCommentList.map((comment) => {
                return (
                  <li key={comment.id}>
                    <b className="username">UserName</b>
                    {comment.mention}
                    <button onClick={() => this.handleRemove(comment.id)}>
                      X
                    </button>
                    <span>0</span>
                    <span className="like">
                      <span className="black">좋아요</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <form className="box" onSubmit={this.handleCreate}>
              <input
                type="text"
                placeholder="댓글 달기..."
                value={userComment}
                onChange={this.userComment}
              />
              <button type="submit">게시</button>
            </form>
          </article>
        </div>
      </div>
    );
  }
}

export default MainLeftComponent;
