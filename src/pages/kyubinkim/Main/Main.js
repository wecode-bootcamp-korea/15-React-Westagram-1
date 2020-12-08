import React, { Component } from "react";
import "../Main/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faBookmark,
  faCog,
  faHeart,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ListComponent from "./ListComponent";

class MainKyubin extends Component {
  state = {
    userComment: "",
    userCommentList: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/Data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userCommentList: res.data,
        });
      });
  }

  userComment = (e) => {
    this.setState({ userComment: e.target.value });
  };

  handleCreate = (e) => {
    e.preventDefault();
    const { userCommentList, userComment } = this.state;
    if (this.state.userComment !== "") {
      this.setState({
        userCommentList: [
          ...userCommentList,
          {
            id: userCommentList.length + 1,
            mention: userComment,
            inLike: 0,
            likePosition: false,
          },
        ],
      });
      this.setState({ userComment: "" });
    }
  };
  handleLike = () => {
    const { userCommentList } = this.state;
    this.setState((prev) => ({ ...userCommentList, inLike: prev.inLike + 1 }));
    this.setState({ likePosition: !this.state.likePosition });
  };
  handleRemove = (e) => {
    const { userCommentList } = this.state;
    const nextComment = userCommentList.filter((info) => {
      return info.id !== e;
    });
    this.setState({ userCommentList: nextComment });
  };
  render() {
    return (
      <div className="Mainkyubin">
        <header>
          <nav>
            <Link to="/login-kyubin">
              <h4 className="logoname">westagram</h4>
            </Link>
            <div className="search">
              <input type="text" placeholder="검색" />
              <ul className="userinfo"></ul>
              <FontAwesomeIcon className="fas fa-search" icon={faSearch} />
            </div>
            <div className="header-menu">
              <a href="/">
                <img
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </a>
              <a className="menu" href="#">
                <img
                  src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt=""
                />
                <ul className="menubox">
                  <li>
                    <FontAwesomeIcon
                      className="faUserCircle"
                      icon={faUserCircle}
                    />
                    프로필
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="faBookmark2"
                      icon={faBookmark}
                    />
                    저장됨
                  </li>
                  <li>
                    <FontAwesomeIcon className="faCog" icon={faCog} />
                    설정
                  </li>
                  <li>로그아웃</li>
                </ul>
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div className="main-left">
            <div className="story">
              <div className="story-wrap">
                <div className="story-box">
                  <img
                    src="https://i.pinimg.com/564x/1b/d9/62/1bd9622642721f5ac5e5f75bc1e214b2.jpg"
                    alt=""
                  />
                  <span>UserName</span>
                </div>
                <div className="story-box">
                  <img
                    src="https://i.pinimg.com/236x/d4/2f/94/d42f940c0bab85ee728805175f242d59.jpg"
                    alt=""
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
                    alt=""
                  />
                  <h2>UserName</h2>
                </div>
                <div className="feeds-img">
                  <img
                    src="https://i.pinimg.com/564x/2b/dc/f8/2bdcf8d6a3040536324c58504cd25cff.jpg"
                    alt=""
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
                  {this.state.userCommentList.map((comm) => {
                    return (
                      <ListComponent
                        key={comm.id}
                        handleRemove={this.handleRemove}
                        handleLike={this.handleLike}
                        id={comm.id}
                        mention={comm.mention}
                        inLike={comm.inLike}
                        likePosition={comm.likePosition}
                      />
                    );
                  })}
                </ul>
                <form className="box" onSubmit={this.handleCreate}>
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    value={this.state.userComment}
                    onChange={this.userComment}
                  />
                  <button type="submit">게시</button>
                </form>
              </article>
            </div>
          </div>
          <div className="main-right">
            <div className="myprofile">
              <img
                src="https://i.pinimg.com/564x/46/d6/f3/46d6f351007f494efdd48406b792e3fd.jpg"
                alt=""
              />
              <span>
                <h2>UserName</h2>
                UserProfile
              </span>
            </div>
            <div className="morepeople">
              <div className="morepeople-header">
                <span>회원님을 위한 추천</span>
                <button>모두보기</button>
              </div>
              <div className="morepeople-content">
                <img
                  src="https://i.pinimg.com/564x/9f/2a/7d/9f2a7d6fa9043cdfa76154ae99da7199.jpg"
                  alt=""
                />
                <div className="morepeople-content-profile">
                  <div className="preofile-content">
                    <span>UserName</span>
                    <span>UserProfile</span>
                  </div>
                  <button>팔로우</button>
                </div>
              </div>
              <div className="morepeople-content">
                <img
                  src="https://i.pinimg.com/564x/1d/a8/36/1da836f447798c960be3b64a7702353d.jpg"
                  alt=""
                />
                <div className="morepeople-content-profile">
                  <div className="preofile-content">
                    <span>UserName</span>
                    <span>UserProfile</span>
                  </div>
                  <button>팔로우</button>
                </div>
              </div>
              <div className="morepeople-content">
                <img
                  src="https://i.pinimg.com/564x/9f/2a/7d/9f2a7d6fa9043cdfa76154ae99da7199.jpg"
                  alt=""
                />
                <div className="morepeople-content-profile">
                  <div className="preofile-content">
                    <span>UserName</span>
                    <span>UserProfile</span>
                  </div>
                  <button>팔로우</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default MainKyubin;
