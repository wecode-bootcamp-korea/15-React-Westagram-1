import React, { Component } from "react";
import "./MainStory.scss";
import MainComment from "../../components/MainComment/MainComment";
class MainStory extends Component {
  state = {
    commentValue: "",
  };
  receiveCommentValue = (e) => {
    const comment = e.target.value;
    this.setState({ commentValue: comment });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const comment = this.state.commentValue;
    comment && this.props.onAdd(comment);
    this.setState({ commentValue: "" });
  };

  handleDelete = (comment) => {
    this.props.onDelete(comment);
  };

  render() {
    return (
      <div className="MainStroy">
        <div className="main-story">
          <div>
            <img src="../images/junhuihan/profile1.jpg" alt="profile1" />
            <p>토람이</p>
          </div>
          <div>
            <img src="../images/junhuihan/profile2.jpg" alt="profile2" />
            <p>말티즈는 참지 않긔</p>
          </div>
        </div>
        <div className="main-feed">
          <div className="main-feed-head">
            <img
              className="main-feed-head-profile_img"
              src="../images/junhuihan/head_img.jpg"
              alt="profile"
            />
            <p className="main-feed-head-profile_nickname">다람이</p>
          </div>
          <img
            className="main-feed-img"
            src="../images/junhuihan/superhero.jpg"
            alt="superherolanding"
          />
          <div className="main-feed-buttons">
            <div className="main-feed-threebuttons">
              <button>
                <i className="fas fa-heart"></i>
              </button>
              <button>
                <i className="far fa-comment"></i>
              </button>
              <button>
                <i className="fas fa-upload"></i>
              </button>
            </div>
            <div className="main-feed-onebutton">
              <button>
                <i className="far fa-bookmark"></i>
              </button>
            </div>
          </div>
          <div className="main-feed-likes">
            <img
              className="main-feed-likes-img"
              src="../images/junhuihan/profile1.jpg"
              alt="profile"
            />
            <p className="main-feed-likes-p">
              <span className="main-feed-likes-p-span">토람이</span>님
              <span className="main-feed-likes-p-span">외 10명</span>이
              좋아합니다.
            </p>
          </div>
          <div className="main-feed-detail">
            <p className="main-feed-detail-p">
              <span className="main-feed-detail-p_span">다람이</span> 아이언맨
              따라하기
            </p>
          </div>
          <div className="main-feed-comment">
            <ul className="main-feed-comment-ul">
              {this.props.userComments.map((comment) => (
                <MainComment
                  key={comment.id}
                  comment={comment}
                  onDelete={this.handleDelete}
                />
              ))}
            </ul>
            <form className="main-feed-comment-form" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="main-feed-comment-form-input"
                placeholder="댓글 달기..."
                onChange={this.receiveCommentValue}
                value={this.state.commentValue}
              />
              <button className="main-feed-comment-form-button">게시</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainStory;
