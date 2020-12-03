import React from "react";
import "./Login.scss";
import "../../../styles/reset.scss";
import "../../../styles/common.scss";
import { Link } from "react-router-dom";

function LoginHayoung() {
  return (
    <div className="body">
      <main className="loginWrapper">
        <a className="logoText" href="login.html">
            <h1>Westagram</h1>
        </a>
        <form className="loginForm">
            <input type="text" className="id" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input type="password" className="password" placeholder="비밀번호" />
            <Link to="/main-hayoung"><button type="submit" className="loginBtn">로그인</button></Link>
        </form>
        <a href="#" className="findPassword">
            <p>비밀번호를 잊으셨나요?</p>
        </a>
        </main>
      <script src="js/login.js"></script>
    </div>
  );
}

export default LoginHayoung;


