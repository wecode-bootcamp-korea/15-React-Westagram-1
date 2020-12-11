import React, { Component } from "react";
import "./Login.scss";

import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      controlName: true,
    };
  }

  receiveIdAndPassword = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  linkToMain = () => {
    const { id, pw } = this.state;
    const isCheckId = id.includes("@");
    const isCheckPw = pw.length >= 5;
    if (!isCheckId) {
      alert("아이디는 @를 포함한 이메일이어야 합니다.");
    }
    if (!isCheckPw) {
      alert("비밀번호는 5자 이상입니다.");
    }
    if (isCheckId && isCheckPw) {
      alert("로그인 성공");
      this.props.history.push("/main-junhui");
    }
  };

  render() {
    const { id, pw } = this.state;

    const changeButtonStyle = (id.length && pw.length) > 0;
    return (
      <div className="Login">
        <div className="logo">Westagram</div>
        <div className="login-and-password" onKeyUp={this.colorChange}>
          <input
            name="id"
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={id}
            onChange={this.receiveIdAndPassword}
          />
          <input
            name="pw"
            type="password"
            className="password" // password {this.state.hiddenPW ? password:text}
            placeholder="비밀번호"
            value={pw}
            onChange={this.receiveIdAndPassword}
          />
        </div>
        <button
          className={changeButtonStyle ? "active" : ""}
          onClick={this.linkToMain}
        >
          로그인
        </button>
        <p>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    );
  }
}

export default withRouter(Login);
