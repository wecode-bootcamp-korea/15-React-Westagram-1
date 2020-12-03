import React, { Component } from "react";
import "./Login.scss";

import { withRouter } from "react-router-dom";

class Login extends Component {
  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="Login">
        <div className="logo">Westagram</div>
        <div className="login-and-password">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="text" className="password" placeholder="비밀번호" />
        </div>
        <button className="login-button" onClick={this.goToMain}>
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
