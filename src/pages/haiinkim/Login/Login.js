import "./Login.scss";
import React from "react";
import { withRouter } from "react-router-dom";


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      //초기화 상태
      id : "",
      pw : "",
      hiddenPw : true,
    }
  }

  handleValue  = (e) => {
    //구조분해 할당 
    const {id, value} = e.target;
    this.setState({
      [id] : value,   
    })
  } 

  showHide = () => {
    this.setState({
      hiddenPw : !this.state.hiddenPw,
    })
  }

  validationCheck = (e) => {
    e.preventDefault()

    const {id, pw} = this.state;
    if (id.indexOf("@") === -1) {
      alert("올바른 이메일주소가 아닙니다.")
    }
    if (pw.length < 5) {
      alert("4자리 이상 입력하세요.")
    }
    if (id.indexOf("@") !== -1 && pw.length > 4) {
      this.props.history.push('/Main');
    }
  }
  
  render() {

    //console.log(this.state)

    const {id, pw, hiddenPw} = this.state;
    const colorchangeBtn = id.length >= 1 && pw.length >= 1;

    return (
      <div className="Login">
              <div>Westagram</div>
              <form>
                  <input 
                  className="loginId" 
                  id="id"
                  onChange={this.handleValue}
                  type="email" 
                  placeholder="이메일 주소"/>
                  <input 
                  className="loginPassword"
                  id="pw" 
                  onChange={this.handleValue}
                  type={hiddenPw ? "password" : "text"}
                  placeholder="비밀번호"/>
                  <span 
                  onClick={this.showHide}>{hiddenPw ? "Show" : "Hide"}</span>
                  <button 
                  onClick={this.validationCheck}
                  className={colorchangeBtn ? "activate" : ""}>로그인</button>
              </form>
              <div className="forgetQ">비밀번호를 잊으셨나요?</div> 
      </div> 
    )   
  }
}

export default withRouter(Login);
