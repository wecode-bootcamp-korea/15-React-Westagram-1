import React, { Component } from "react";
import "./MainAside.scss";

class MainAside extends Component {
  render() {
    return (
      <aside className="mainAside">
        <div className="main-aside-me">
          <img src="../images/junhuihan/head_img.jpg" alt="" />
          <div>
            <p className="main-aside-me-p_nickname">다람이</p>
            <p className="main-aside-me-p_name">다람쥐</p>
          </div>
          <button>전환</button>
        </div>
        <div className="main-aside-recommend">
          <div className="main-aside-recommend-head">
            <p className="main-aside-recommend-p">회원님을 위한 추천</p>
            <p className="main-aside-recommend-p_view">모두보기</p>
          </div>
          <div className="main-aside-recommend-div">
            <ul className="main-aside-recommend-ul">
              <li>
                <img src="../images/junhuihan/profile3.jpg" alt="" />
                <div className="main-aside-recommend-ul-li-div">
                  <span className="main-aside-recommend-ul-li-div-span">
                    jiaaaaahye
                  </span>
                  <p className="main-aside-recommend-ul-li-div-p_detail">
                    회원님을 위한 추천
                  </p>
                </div>
                <button className="main-aside-recommend-ul-li-button">
                  팔로우
                </button>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>
            westagram 정보∙지원∙홍보 센터∙API∙채용
            정보∙개인정보처리방침∙약관∙디렉터리∙프로필∙해시태그∙언어
          </p>
          <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
        </footer>
      </aside>
    );
  }
}

export default MainAside;
