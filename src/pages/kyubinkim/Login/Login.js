import React, { Component } from "react";
import "../Login/Login.scss";

// const API = "http://3.35.19.3:8000/account/signup";

class LoginKyubin extends Component {
  state = {
    userName: "",
    userPass: "",
    infoChecked: false,
    passChecked: false,
    isBtnActive: false,
  };

  // Main으로 가기
  goToMain = () => {
    const { infoChecked, passChecked } = this.state;
    if (infoChecked && passChecked) {
      this.props.history.push("/Main-kyubin");
    }
  };

  handleIdValue = (e) => {
    this.setState({ userName: e.target.value });
  };

  handlePassValue = (e) => {
    this.setState({ userPass: e.target.value });
  };

  //input @ 체크
  infoInputCheck = () => {
    const isValidUserName = this.state.userName.includes("@");
    if (isValidUserName) {
      this.setState({ infoChecked: true });
    }
  };

  //pass 5자 이상 체크
  passInputCheck = (e) => {
    const isValidUserPass = e.target.value.length >= 5;
    this.setState({ passChecked: isValidUserPass });
  };

  //box 컬러 변경
  handelBoxColor = () => {
    const { infoChecked, passChecked } = this.state;
    if (infoChecked && passChecked) {
      this.setState({ isBtnActive: true });
    }
  };
  // API fetch 연습
  // handleApi = () => {
  //   fetch(API, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.userName,
  //       password: this.state.userPass,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result));
  // };

  render() {
    const { infoChecked, passChecked } = this.state;
    return (
      <div className="Loginkyubin">
        <h1>westagram</h1>
        <div className="Login-box">
          <input
            className="info"
            name="email"
            type="email"
            placeholder="이메일"
            onChange={this.infoInputCheck}
            required
          />
          <input
            className="pass"
            name="password"
            type="password"
            placeholder="패스워드 (5자 이상)"
            onChange={this.passInputCheck}
            required
          />
        </div>
        <button
          className={
            infoChecked && passChecked ? "login_button active" : "login_button"
          }
          onClick={this.goToMain}
        >
          로그인
        </button>
        <a className="misspass" href="/" onChange={this.handleApi}>
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}
export default LoginKyubin;
