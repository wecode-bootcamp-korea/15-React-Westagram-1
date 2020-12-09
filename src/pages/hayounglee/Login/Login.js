import React from "react";
import "./Login.scss";
import "../../../styles/reset.scss";
import "../../../styles/common.scss";
//import { Link } from "react-router-dom";
//import { render } from "node-sass";

const API = "http://3.35.19.3:8000/account/signin";

class LoginHayoung extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPW: true,
      productList: [],
    };
  }
  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.Autorization) {
          localStorage.setItem("token", result.Autorization);
        }
      });
  };

  showPassword = () => {
    this.setState({
      hiddenPW: !this.state.hiddenPW,
    });
  };

  render() {
    const { id, pw } = this.state;
    const ActiveBtn = (id.length && pw.length) > 0;

    return (
      <div className="body">
        <main className="loginWrapper">
          <a className="logoText" href="login.html">
            <h1>Westagram</h1>
          </a>
          <form className="loginForm">
            <input
              onChange={this.handleId}
              type="text"
              name="id"
              value={id}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePw}
              type="password"
              name="pw"
              value={pw}
              placeholder="비밀번호"
            />

            <button
              onClick={this.handleClick}
              type="submit"
              className={ActiveBtn ? "loginBtn active" : "loginBtn"}
            >
              로그인
            </button>
          </form>
          <div className="findPassword">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </main>
        <script src="js/login.js"></script>
      </div>
    );
  }
}

export default LoginHayoung;
