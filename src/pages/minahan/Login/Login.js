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
   
    handleInputValueChange = (e) => {
        const {id, value} = e.target;
        this.setState({[id] : value});
    }
    
    showPassword = () => {
        this.setState({ hiddenPW : ! this.state.hiddenPW});
    }

    render(){

        
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
                                onChange = {this.handleInputValueChange}
                                />
                                <div className="passwordWrap">
                                    <input  
                                    id = "password"
                                    type = { hiddenPW ? "password" : "text"}
                                    placeholder="비밀번호" 
                                    className="input login_password" 
                                    onChange = { this.handleInputValueChange}
                                    />  
                                    <span className="show" onClick={this.showPassword}>
                                    {this.state.hiddenPW ? "Show" : "Hide"}
                                    </span> 
                                </div>
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