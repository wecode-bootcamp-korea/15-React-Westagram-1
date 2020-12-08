import React from 'react';
import './Login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            id : "",
            password : "",
            hiddenPW : true,
            productList : [],
        };
    }
    // 로그인기능연습
    handleIdChange = (e) =>{
        this.setState({id : e.target.value});
    }

    handlePasswordChange = (e) =>{
        this.setState({password : e.target.value});
    }

    render(){

        // console.log  => render/return 사이에!
        console.log("아이디", this.state.id, "비밀번호", this.state.password);

        return(        
            <div className="Mina_Login">  
                <div className="loginpage_wrap">      
                    <div className="login_wrap">
                        <header>
                            <h1 className="login_h1">Westagram</h1>
                        </header>
                        <section className="login_getinfo_wrap">
                            <div className="inputwrap">
                                <input 
                                id = "id"
                                type="text" 
                                placeholder="전화번호, 사용자 이름 또는 이메일" 
                                className="input login_id"
                                onChange = {this.handleIdChange}
                                />
                                <input 
                                id = "password"
                                type="password" 
                                placeholder="비밀번호" 
                                className="input login_password" 
                                onChange = { this.handlePasswordChange}
                                />   
                            </div>
                            <button className="login_btn" disabled>로그인</button>
                            <div className="or">
                                <div></div>
                                    <p>또는</p>
                                    <div></div>
                                </div> 
                                <a href="#" target="blank" className="facebook_login">
                                    <img src="./images/minahan/facebook.png" alt="페이스북로고" />
                                    <span>Facebook으로 로그인</span>
                                </a>  
                            <a href="#" target="blank" className="lostpassword">비밀번호를 잊으셨나요?</a>  
                        </section>
                    </div>               
                    <footer className="assign"> 
                        <div className="login_assign_wrap">
                            <span>계정이 없으신가요?</span>
                            <Link to="/main-mina">가입하기</Link>  
                        </div>            
                    </footer> 
                </div>
            </div>
        );
    }
}
export default Login;