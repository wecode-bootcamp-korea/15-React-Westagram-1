import React from 'react';
import Comments from './Comments/comments'
import './Main.scss';



class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            comments : [
                {
                    id : 1,
                    userName : "hoonie",
                    comment : "Very good"
                },
                {
                    id : 2,
                    userName : "mina",
                    comment : "Niceeeee!"
                }

            ],
            doYouLikeIt : true
            
            
        }
    }

    commentValue = (e) => {
        this.setState({ comment : e.target.value })
         
       

    }

    addComment = ()=> {
        const newComment = [...this.state.comments,{
            id : 3,
            userName : "hoonlee",
            comment : this.state.comment
        }]
        this.setState({ comments : newComment})
        
        
        
    }
    

    render(){

        // console.log(newComment)

        return(
            <div className="Mina_Main">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <h1><a href="https://www.instagram.com/?">Westagram</a></h1>
                            </li>
                            <li>
                                <input type="text" placeholder="검색" />
                            </li>
                            <li className="header_ico">
                                <div>
                                    <a href="#">
                                        <img src="./images/minahan//ico_home.png" alt="홈" />
                                    </a>
                                    <a href="#">
                                        <img src="./images/minahan/nav_dm_ico.png" alt="다이렉트메시지" />
                                    </a>
                                    <a href="#">
                                        <img src="./images/minahan/explore.png" alt="탐험" />
                                    </a>
                                    <a href="#">
                                        <img src="./images/minahan/heart.png" alt="좋아요" />
                                    </a>
                                    <a href="#">
                                        <img src="./images/minahan/profile.png" alt="내계정" />
                                    </a>
                                </div>
                            </li>
                        </ul> 
                    </nav>
                </header>
                <div className="con_box">
                    <main> 
                        <div className="feeds">   
                            <article>
                            <div className="story">
                                <ul>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img1.jpg" alt="스토리" /></span>
                                            <p>dda_sol_</p>
                                        </a>
                                    </li>   
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img2.jpg" alt="스토리" /></span>
                                            <p>chavely</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img3.jpg" alt="스토리" /></span>
                                            <p>jo.hany.93</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img4.jpg" alt="스토리" /></span>
                                            <p>lee_gaheun</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img5.jpg" alt="스토리" /></span>
                                            <p>welish_be</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img6.jpg" alt="스토리" /></span>
                                            <p>i_iary2</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="blank">
                                            <span><img src="./images/minahan/img7.jpg" alt="스토리" /></span>
                                            <p>kmg2604</p>
                                        </a>
                                    </li>                                          
                                </ul>
                            </div>
                            <div className="feed">
                                <div className="feed_header">
                                    <div className="accout_name">
                                        <img src="./images/minahan/img10.jpg" alt="프로필사진" />
                                        <a href="#">parkondo</a>
                                    </div>
                                    <button>
                                        <img src="./images/minahan/dot.png" alt="더보기" />
                                    </button>
                                </div>
                                <img src="https://honestlywtf.com/wp-content/uploads/2020/02/sophiesmallhorn4.jpg" alt="피드이미지" className="feed_img" />
                                <div className="feed_txt">
                                    <div className="feed_txt_ico">
                                        <div className="feed_txt_ico_left">
                                            <button className="feed_heart">
                                                <img src="./images/minahan//heart.png" alt="좋아요" />
                                            </button>
                                            <a href="#" className="margin_side">
                                                <img src="./images/minahan/comments.png" alt="댓글달기" />
                                            </a>
                                            <button className="dm">
                                                <img src="./images/minahan/nav_dm_ico.png" alt="다이렉트메시지보내기" />
                                            </button>
                                        </div>
                                        <button className="bookmark">
                                            <img src="./images/minahan/bookmark.png" alt="북마크하기" />
                                        </button>
                                    </div>
                                    <p><a href="" className="bold">john.grunwell</a>님 <a href="" className="bold">여러 명</a>이 좋아합니다</p>
                                    <div className="contents">            
                                        <a href="#" className="bold">minimalandcontemporary</a>
                                        <span>New works..!!!!</span>
                                    </div>        
                                    <button className="more_comments">댓글 53개 모두 보기</button>                                  
                                    <Comments comments={this.state.comments}/>
                                                               
                                </div>
                                <div className="add_comments">
                                    <div>
                                        <input 
                                        type="text" 
                                        placeholder="댓글 달기..."
                                        onChange = {this.commentValue}
                                        />
                                        <button onClick = {this.addComment}>
                                            게시
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </article>
                        </div>
                    </main>
                    <div className="main_right">
                        <div className="my_accout">
                            <img src="./images/minahan/mina.jpeg" alt="프로필이미지" />
                            <a href="#">mina_.__._</a>
                            <button>전환</button>
                        </div>
                        <div className="main_right_txt">
                            <span>회원님을 위한 추천</span>
                            <a href="#">모두보기</a>
                        </div>
                        <ul className="main_right_recommendation">
                            <li>
                                <img src="./images/minahan/img9.jpg" alt="taeheech님의 프로필이미지" />
                                <span>taeheech</span>
                                <button>팔로우</button>
                            </li>
                            <li>
                                <img src="./images/minahan/img10.jpg" alt="mindong_mindong님의 프로필 이미지" />
                                <span>mindong_mindong</span>
                                <button>팔로우</button>
                            </li>
                            <li>
                                <img src="https://i.pinimg.com/474x/51/b0/dd/51b0dd2d8a9d1013c593e07340e555c4.jpg" alt="aammyy_lee님의 프로필사진" />
                                <span>aammyy_lee</span>
                                <button>팔로우</button>
                            </li>
                            <li>
                                <img src="https://i.pinimg.com/474x/3c/a2/89/3ca289cf9b103865600f24c7b370a842.jpg" alt="hoonie_.__님의 프로필사진" />
                                <span>hoonie_.__</span>
                                <button>팔로우</button>
                            </li>
                            <li>
                                <img src="https://i.pinimg.com/474x/9b/9f/ff/9b9fff6f165695da92a8b1e159b6e640.jpg" alt="Wecode님의 프로필 사진" />
                                <span>Wecode</span>
                                <button>팔로우</button>
                            </li>
                            <li>
                                <img src="https://i.pinimg.com/474x/81/5e/71/815e715a4bcab20579df8d132b7ed2c4.jpg" alt="dlrudgns님의 프로필사진" />
                                <span>dlrudgns</span>
                                <button>팔로우</button>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>       
        );
    }
}

export default Main;