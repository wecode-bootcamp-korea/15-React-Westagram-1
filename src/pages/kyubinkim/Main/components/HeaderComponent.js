import React, { Component } from "react";
import {
  faSearch,
  faUserCircle,
  faBookmark,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
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
            <img
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />

            <img
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />

            <a className="menu" href="/">
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
                  <FontAwesomeIcon className="faBookmark2" icon={faBookmark} />
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
    );
  }
}

export default HeaderComponent;
