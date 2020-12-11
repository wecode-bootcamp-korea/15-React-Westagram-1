import React, { Component } from "react";

class MainRightComponent extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="myprofile">
          <img
            src="https://i.pinimg.com/564x/46/d6/f3/46d6f351007f494efdd48406b792e3fd.jpg"
            alt="인물1"
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
              alt="추천 인물1"
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
              alt="추천 인물2"
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
              alt="추천 인물3"
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
    );
  }
}

export default MainRightComponent;
