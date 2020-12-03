import React from "react";
import "./Main.scss";
import "../../../styles/reset.scss";
import "../../../styles/common.scss";

function MainHayoung() {
  return (
    <div className="body">
    <nav>
        <a className="logoText" href="main.html">
            <h2>Westagram</h2>
        </a>
        <div className="searchWrapper">
            <img src="./images/hayounglee/magnify.svg" alt="searchIc" className="searchIc" />
            <input type="text" id="search" placeholder="검색" />
        </div>
        <div className="navMenu">
            <img src="./images/hayounglee/explore.png" alt="explore" className="ic explore" />
            <img src="./images/hayounglee/heart.png" alt="heart" className="ic heart" />
            <img src="./images/hayounglee/profile.png" alt="profile" className="ic profile" />
        </div>
    </nav>
    <main>
        <section className="feeds">
            <article>
                <header className="article header">
                    <div className="userInfo">
                        <img src="./images/hayounglee/thumbnail_img1.jpeg" alt="thumbnail" className="thumbnail article" />
                        <span className="userId">canon mj</span>
                    </div>
                    <img src="./images/hayounglee/more.svg" alt="more" className="ic more" />
                </header>
                <img src="./images/hayounglee/img_example.jpg" alt="articleImg" className="article img" />
                <div className="article footer">
                    <div className="icBar">
                        <div className="leftsideWrapper">
                            <img src="./images/hayounglee/heart.svg" alt="heart2" className="ic heart2" />
                            <img src="./images/hayounglee/comment.svg" alt="comment" className="ic comment" />
                            <img src="./images/hayounglee/navigation.svg" alt="navigation" className="ic navigation" />
                        </div>
                        <img src="./images/hayounglee/bookmark.svg" alt="bookmark" className="ic bookmark" />
                    </div>
                    <div className="reactions">
                        <p>좋아요 59개</p>
                    </div>
                    <div className="comments">
                        <ul className="commentList">

                        </ul>
                    </div>
                    <p className="postTime">2시간 전</p>
                    <form className="commentForm">
                        <input placeholder="댓글 달기..." className="commentInput"></input>
                        <button type="submit" className="submitBtn">게시</button>
                    </form>
                </div>
            </article>
        </section>
    </main>
    <section className="rightFloatingMenu">
        <div className="myProfile">
            <img src="./images/hayounglee/myImg.jpg" alt="나의 프로필 사진" className="thumbnail myProfile" />
            <div>
              <span className="userId">bibiandpipi</span>
              <span className="subText">HAYOUNG LEE</span>
            </div>
          </div>
        <div className="menuTitle">
          <span className="subTitle">회원님을 위한 추천</span>
          <span className="viewAll">모두 보기</span>
        </div>
        <ul className="recommendList">
          <li>
            <div className="profile">
              <img className="thumbnail" src="./images/hayounglee/li1.jpg" alt="renebaebae님의 프로필 사진" />
              <div className="profileText">
                <span className="userId">renebaebae</span>
                <span className="subText">hi_sseulgi님 외 2명이 팔로우합니다</span>
              </div>
            </div>
            <span className="followBtn">팔로우</span>
          </li>
          <li>
            <div className="profile">
              <img className="thumbnail" src="./images/hayounglee/li2.jpg" alt="_jeongjaehyun님의 프로필 사진" />
              <div className="profileText">
                <span className="userId">_jeongjaehyun</span>
                <span className="subText">johnnyjsuh님이 팔로우합니다</span>
              </div>
            </div>
            <span className="followBtn">팔로우</span>
          </li>
          <li>
            <div className="profile">
              <img className="thumbnail" src="./images/hayounglee/li3.jpg" alt="leehi_hi님의 프로필 사진" />
              <div className="profileText">
                <span className="userId">leehi_hi</span>
                <span className="subText">jennierubyjane님 외 5명이 팔로우합...</span>
              </div>
            </div>
            <span className="followBtn">팔로우</span>
          </li>

        </ul>
        <footer className="footerScript">
            <p>
              소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙ <br />약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
              <br /><br />
              © 2020 INSTAGRAM FROM FACEBOOK
            </p>
        </footer>
    </section>
    <script src="js/main.js"></script>
</div>
  );
}

export default MainHayoung;