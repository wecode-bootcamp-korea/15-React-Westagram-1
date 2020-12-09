import React from "react";
import "./Main.scss";
import List from "./List";
import COMMENT from "./commentData";
import { IoLogoInstagram } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const USER = "Haiin";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: "",
      commentList: COMMENT,
    };
  }

  handleValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { inputComment, commentList } = this.state;
    this.setState({
      inputComment: "",
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: USER,
          content: inputComment,
        },
      ],
    });
  };

  deleteComment = (i) => {
    const { commentList } = this.state;
    const newCommentList = commentList.filter((comm) => comm.id !== i);
    this.setState({
      commentList: newCommentList,
    });
  };

  render() {
    const { inputComment, commentList } = this.state;
    const colorChange = inputComment.length > 1;

    const addListComment = commentList.map((comm) => {
      return (
        <List
          comm={comm}
          key={comm.id}
          id={comm.id}
          USER={USER}
          deleteComment={this.deleteComment}
        />
      );
    });

    return (
      <div className="Main">
        <nav>
          <div className="navLogo">
            <IoLogoInstagram className="navLogoIcon" />
            <div className="navLogoBar"></div>
            <div className="navLogoInsta">Westagram</div>
          </div>
          <div className="navSearch">
            <input type="text" placeholder="Search" />
            <BiSearch className="navSearchIcon" />
          </div>
          <div className="navIcons">
            <AiFillHome className="navIcon" />
            <RiSendPlaneLine className="navIcon" />
            <AiOutlineCompass className="navIcon" />
            <AiOutlineHeart className="navIcon" />
          </div>
        </nav>
        <main className="main">
          <div className="mainFeeds">
            <div className="mainFeedsStory">
              <ul>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
                <li className="mainFeedsStoryLi">
                  <img
                    src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                    alt="Gong_you"
                    title="Gong_you"
                  />
                  <div className="mainFeedsStoryLiDiv"></div>
                  <div className="mainFeedsStoryLiName">Gong_you</div>
                </li>
              </ul>
            </div>
            <article>
              <div className="mainFeedTitle">
                <div className="mainFeedTitleName">
                  <img
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507"
                    alt="profile"
                    title="profile"
                  />
                  <div>Haiin</div>
                </div>
                <BsThreeDots className="mainFeedTitleIcon" />
              </div>
              <div className="mainFeedPic">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/50936547_495838930942275_2529245674680422891_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=ZKMi4B-go-MAX9VNiRt&tp=1&oh=a085b4332d24251a98fccf65e214d9b3&oe=5FEB9BD6"
                  alt="santiago"
                  title="santiago"
                />
              </div>
              <div className="mainFeedIcons">
                <div className="mainFeedIconsLeft">
                  <AiOutlineHeart className="navIcon" />
                  <BiComment className="navIcon" />
                  <RiSendPlaneLine className="navIcon" />
                </div>
                <div className="mainFeedIconsRight">
                  <BiBookmark className="navIconR" />
                </div>
              </div>
              <div className="mainFeedLike">
                <img
                  src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMjE3/MDAxNDk2OTg3ODIzODA5.MyG6GA71J-5DQE2UIusK6Zl9LyekZXHS4vzSkvSKRZkg.mTjbmTr-iLdD3idvOt5haiN90Iw0IV6Lb5hUkomEX7Eg.JPEG/%EA%B3%B5%EC%9C%A0.jpg?type=w1200"
                  alt="Gong_you profile"
                  title="Gong_you"
                />
                <span>Liked by</span>
                <span>Gong-you</span>
                <span>and</span>
                <span>10 others</span>
              </div>
              <div className="mainFeedContent">
                <span>Haiin</span>
                <span>Santiago de Chile</span>
                <span>more</span>
              </div>
              <ul className="mainFeedComments">
                <li className="mainFeedComment">
                  <div className="mainFeedCommentList">
                    <span>Gong_you</span>
                    <span>oooh babe I wanna go with You 😘</span>
                  </div>
                  <div className="mainFeedCommentLike">
                    <AiOutlineHeart className="navIcon" />
                  </div>
                </li>
                {addListComment}
              </ul>
              <form onSubmit={this.addComment}>
                <input
                  className="mainFeedCommentBoxInput"
                  type="text"
                  placeholder="Add a comment..."
                  id="inputComment"
                  value={inputComment}
                  onChange={this.handleValue}
                />
                <button
                  type="button"
                  className={colorChange ? "postingColor" : ""}
                >
                  Post
                </button>
              </form>
            </article>
          </div>
          <div className="mainRight">
            <div className="mainRightUser">
              <div className="mainRightUserLeft">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507"
                  alt="profile pictur"
                  title="profile picture"
                />
                <div className="mainRightUserLeftProfile">
                  <div className="mainRightUserLeftProfileId">Haiin</div>
                  <div className="mainRightUserLeftProfileDes">😊</div>
                </div>
              </div>
              <div className="mainRightUserRight">Switch</div>
            </div>
            <div className="mainRightStory">
              <div className="mainRightStoryTitle">
                <span>Suggestions For You</span>
                <span>See All</span>
              </div>
              <ul className="mainRightStoryUl">
                <li>
                  <div className="mainRightStoryUpdateUser">
                    <img
                      src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTAx/MDAxNTg3ODE5MDEzNTA5.p3hCGnZHNY3jPLMhrHy1aXH9t20SLMsdfbnQMAbzY-wg.xfA_E3X5uMPOq3zabKoaITYGZXKkgw5TxEtMjPUmCsAg.PNG.thirdsky30/CropArea0002.png?type=w800"
                      alt="profile pictur"
                      title="profile picture"
                    />
                    <div className="mainRightStoryUpdateUserName">
                      <div>Ji__Gong</div>
                      <div>Suggested for you</div>
                    </div>
                  </div>
                  <div className="mainRightStoryUpdateFollow">Follow</div>
                </li>
                <li>
                  <div className="mainRightStoryUpdateUser">
                    <img
                      src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTAx/MDAxNTg3ODE5MDEzNTA5.p3hCGnZHNY3jPLMhrHy1aXH9t20SLMsdfbnQMAbzY-wg.xfA_E3X5uMPOq3zabKoaITYGZXKkgw5TxEtMjPUmCsAg.PNG.thirdsky30/CropArea0002.png?type=w800"
                      alt="profile pictur"
                      title="profile picture"
                    />
                    <div className="mainRightStoryUpdateUserName">
                      <div>Ji__Gong</div>
                      <div>Suggested for you</div>
                    </div>
                  </div>
                  <div className="mainRightStoryUpdateFollow">Follow</div>
                </li>
                <li>
                  <div className="mainRightStoryUpdateUser">
                    <img
                      src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTAx/MDAxNTg3ODE5MDEzNTA5.p3hCGnZHNY3jPLMhrHy1aXH9t20SLMsdfbnQMAbzY-wg.xfA_E3X5uMPOq3zabKoaITYGZXKkgw5TxEtMjPUmCsAg.PNG.thirdsky30/CropArea0002.png?type=w800"
                      alt="profile pictur"
                      title="profile picture"
                    />
                    <div className="mainRightStoryUpdateUserName">
                      <div>Ji__Gong</div>
                      <div>Suggested for you</div>
                    </div>
                  </div>
                  <div className="mainRightStoryUpdateFollow">Follow</div>
                </li>
              </ul>
            </div>
            <footer className="mainRightFooter">
              <div>
                About﹒Help﹒Press﹒API﹒Jobs﹒Privacy﹒Terms﹒Locations﹒Top
                Accounts﹒Hashtags﹒Language
              </div>
              <div>Ⓒ 2020 INSTAGRAM FROM FACEBOOK</div>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
