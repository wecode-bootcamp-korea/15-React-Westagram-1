import React, { Component } from "react";
import "../Login/Login.scss";

class LoginKyubin extends Component {
  state = {
    userName: "",
    userPass: "",
    infoChecked: false,
    passChecked: false,
    buttonColor: "#bedffc",
    move: false,
  };

  // Main으로 가기
  goToMain = () => {
    if (this.state.move) {
      this.props.history.push("/Main-kyubin");
    }
  };

  //input @ 체크
  infoInputCheck = (e) => {
    this.setState({ userName: e.target.value });
    if (e.target.value.includes("@")) {
      this.setState({ infoChecked: true }, () => this.color());
    } else {
      this.setState({ infoChecked: false }, () => this.color());
    }
  };
  //pass 5자 이상 체크
  passInputCheck = (e) => {
    this.setState({ userPass: e.target.value });
    if (e.target.value.length >= 5) {
      this.setState({ passChecked: true }, () => this.color());
    } else {
      this.setState({ passChecked: false }, () => this.color());
    }
    console.log(e.target.value);
  };
  //box 컬러 변경
  color = () => {
    if (this.state.infoChecked && this.state.passChecked) {
      this.setState({ buttonColor: "#1296f7" });
      this.setState({ move: true });
    } else {
      this.setState({ buttonColor: "#bedffc" });
      this.setState({ move: false });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="Loginkyubin">
          <p>westagram</p>
          <div className="Login-box">
            <input
              id="info"
              name="email"
              type="email"
              placeholder="이메일"
              onChange={this.infoInputCheck}
              required
            />
            <input
              id="pass"
              name="password"
              type="password"
              placeholder="패스워드 (5자 이상)"
              onChange={this.passInputCheck}
              required
            />
          </div>
          <button
            id="login-button"
            style={{ backgroundColor: this.state.buttonColor }}
            onClick={this.goToMain}
          >
            로그인
          </button>
          <a className="misspass" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </>
    );
  }
}

export default LoginKyubin;
