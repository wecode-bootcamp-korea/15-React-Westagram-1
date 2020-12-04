import React from "react";
import "./Main.scss";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //초기화 상태
          //
        }
      }

    render () {
        return (
            <div className="Main"> 
                <nav>
                    <div className="navLogo">
                        <i className="fab fa-instagram"></i>
                        <div className="navLogoBar"></div>
                        <div className="navLogoInsta">Westagram</div>
                    </div>
                    <div className="navSearch">
                        <input type="text" placeholder="검색"/>
                    </div>
                    <div className="navIcons">
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <i className="far fa-user"></i>
                    </div>
                </nav>
                <main className="main">
                    <div className="mainFeeds">
                        <article>
                            <div className="mainFeedTitle">
                                <div className="mainFeedTitleName">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile" title="profile"/>
                                    <div>Haiin.k</div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>    
                            </div>
                            <div className="mainFeedPic">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/50936547_495838930942275_2529245674680422891_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=ZKMi4B-go-MAX9VNiRt&tp=1&oh=a085b4332d24251a98fccf65e214d9b3&oe=5FEB9BD6" alt="santiago" title="santiago"/>
                            </div>
                            <div className="mainFeedIcons">
                                <div className="mainFeedIconsLeft">
                                    <i className="fas fa-heart"></i>
                                    <i className="far fa-comment-alt"></i>
                                    <i className="far fa-caret-square-up"></i>
                                </div>
                                <div className="mainFeedIconsRight">
                                    <i className="far fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="mainFeedLike">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/60634694_380012682631199_2131800333189990503_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=f3vQRpQ_84MAX8xL3op&tp=1&oh=a5d55cea149e47ba7fb97f10e82ef48a&oe=5FE984C8" alt="Gong_you profile" title="Gong_you" />
                                <span>Gong-You</span>
                                <span>님</span>
                                <span>외 10명</span>
                                <span>이 좋아합니다</span>
                            </div>
                            <div className="mainFeedContent">
                                <span>Haiin.k</span>
                                <span>Santiago de Chile</span>                       
                                <span>더보기</span> 
                            </div>
                            <ul className="mainFeedComments">
                                <li className="mainFeedComment">
                                    <div className="mainFeedCommentList">
                                        <span>Gong_you</span>
                                        <span>oooh babe I wanna go with You 😘</span>
                                    </div>
                                    <div className="mainFeedCommentLike">
                                        <i className="far fa-heart mainFeedCommentLikeHeart"></i>
                                        <span className="mainFeedCommentDel">삭제</span>
                                    </div>
                                </li>
                                <li className="mainFeedComment">
                                    <div className="mainFeedCommentList">
                                        <span>Dongwon_Kang</span>
                                        <span>like it,🥰</span>
                                    </div>
                                    <div className="mainFeedCommentLike">
                                        <i className="far fa-heart mainFeedCommentLikeHeart"></i>
                                        <span className="mainFeedCommentDel">삭제</span>
                                    </div>
                                </li>
                            </ul>
                            <form className="mainFeedCommentBox">
                                <input className="mainFeedCommentBoxInput" type="text" placeholder="댓글 달기..."/>
                                <button type="button" className="mainFeedBtn">게시</button>
                            </form>
                        </article>
                        <article>
                            <div className="mainFeedTitle">
                                <div className="mainFeedTitleName">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                    <div>Haiin.k</div>
                                </div>
                                <i className="fas fa-ellipsis-h" ></i>    
                            </div>
                            <div className="mainFeedPic">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/51906517_1250532808428839_5603696439069281909_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=iOU_2C0RLeUAX9wW6HN&tp=1&oh=6e69f388aa133c5b9f2732c3b7bdf9a9&oe=5FEA9253" alt="santiago" title="santiago"/>
                            </div>
                            <div className="mainFeedIcons">
                                <div className="mainFeedIconsLeft">
                                    <i className="fas fa-heart" ></i>
                                    <i className="far fa-comment-alt" ></i>
                                    <i className="far fa-caret-square-up" ></i>
                                </div>
                                <div className="mainFeedIconsRight">
                                    <i className="far fa-bookmark" ></i>
                                </div>
                            </div>
                            <div className="mainFeedLike">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/60634694_380012682631199_2131800333189990503_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=f3vQRpQ_84MAX8xL3op&tp=1&oh=a5d55cea149e47ba7fb97f10e82ef48a&oe=5FE984C8" alt="santiago" title="santiago" />
                                <span>Gong-You</span>
                                <span>님</span>
                                <span>외 10명</span>
                                <span>이 좋아합니다</span>
                            </div>
                            <div className="mainFeedContent">
                                <span className="mainFeedContent_name">Haiin.k</span>
                                <span>Santiago de Chile</span>                       
                                <span>더보기</span> 
                            </div>
                            <ul className="mainFeedComments">
                                <li className="mainFeedComment">
                                    <div className="mainFeedCommentList">
                                        <span>Gong_you</span>
                                        <span>oooh babe I wanna go with You 😘</span>
                                    </div>
                                    <div className="mainFeedCommentLike">
                                        <i className="far fa-heart mainFeedCommentLikeHeart"></i>
                                        <span className="mainFeedCommentDel">삭제</span>
                                    </div>
                                </li>
                                <li className="mainFeedComment">
                                    <div className="mainFeedCommentList">
                                        <span>Dongwon_Kang</span>
                                        <span>like it,🥰</span>
                                    </div>
                                    <div className="mainFeedCommentLike">
                                        <i className="far fa-heart mainFeedCommentLikeHeart"></i>
                                        <span className="mainFeedCommentDel">삭제</span>
                                    </div>
                                </li>
                            </ul>
                            <form className="mainFeedCommentBox">
                                <input className="mainFeedCommentBoxInput" type="text" placeholder="댓글 달기..."/>
                                <button type="button" className="mainFeedBtn">게시</button>
                            </form>
                        </article>
                    </div>
                    <div className="mainRight">
                        <div className="mainRightUser">
                            <div className="mainRightUserLeft">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                <div className="mainRightUserLeftProfile">
                                    <div className="mainRightUserLeftProfileId">Haiin.k</div>
                                    <div className="mainRightUserLeftProfileDes">lalalalala</div>
                                </div>
                            </div>
                            <div className="mainRightUserRight">전환</div>
                        </div>
                        <div className="mainRightStory">
                            <div className="mainRightStoryTitle">
                                <span>스토리</span>
                                <span>모두 보기</span>
                            </div>
                            <ul>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture"/>
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">17 mins ago</div>
                                    </div>
                                </li>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture"/>
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">27 mins ago</div>
                                    </div>
                                </li>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture"/>
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">37 mins ago</div>
                                    </div>
                                </li>
                            </ul>                    
                        </div>
                        <div className="mainRightStory">
                            <div className="mainRightStoryTitle">
                                <span>회원님을 위한 추천</span>
                                <span>모두 보기</span>
                            </div>
                            <ul className="mainRightStoryUl">
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">lalalalala</div>
                                    </div>
                                </li>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">lalalalala</div>
                                    </div>
                                </li>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">lalalalala</div>
                                    </div>
                                </li>
                                <li className="mainRightStoryUpdate">
                                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79813069_2546349628910798_750512078738962428_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hQXzVhMMD4IAX8hEDT9&tp=1&oh=6019cabfe210ec762c4683cd589b9bd3&oe=5FE93507" alt="profile pictur" title="profile picture" />
                                    <div className="mainRightStoryUpdateContent">
                                        <div className="mainRightStoryUpdateContentId">Haiin.k</div>
                                        <div className="mainRightStoryUpdateContentTime">lalalalala</div>
                                    </div>
                                </li>
                            </ul>                    
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;


